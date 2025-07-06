import cron from 'node-cron';
import axios from 'axios';

cron.schedule("*/30 * * * * *", async () => {
  try {
    const notificationObj = {
        title: '🔥 Flash Sale!',
        description: 'Save up to 50% for 2 hours only!',
        type: 'promo'
    };
    
    const res = await axios.post(`${process.env.API_URL}/api/notification/send`, JSON.stringify(notificationObj), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.CRON_SECRET}`
      }
    });
    
  } catch (err) {
    console.error(err);
  }
});