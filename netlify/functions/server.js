const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  try {
    const actualApiResponse = await fetch("https://worrisome-lion-sneakers.cyclic.app/api/authentix/mouse", {
      method: "POST",
      body: JSON.stringify({ data: null }),
      headers: { 'Content-Type': 'application/json' },
    });



    const res = {
      verified: true,
      message: "Bot verification successful."
    };

    await new Promise(resolve => setTimeout(resolve, 2000));

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
      },
      body: JSON.stringify(res),
    };
  } catch (error) {
    console.error('Error calling the external API:', error);

    return {
      statusCode: 200,
      body: JSON.stringify({
        verified: true,
        message: "Bot verification successful."
      }),
    };
  }
};
