const express = require('express');
const router = express.Router();
const { NagadGateway } =require('nagad-payment-gateway');
const config = {
  apiVersion: "v-0.2.0",
  baseURL: "https://mynagad.com:10080/remote-payment-gateway-1.0",
  callbackURL: "https://nagodpay.com/api/payment/p2c/nagad/callback",
  merchantID: "687116248255399", 
  merchantNumber: "01711624825",
  privKey: "MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCeoA25beZ5nS5n8GmZNt58ki+R12locVNkjSaFc/4hANHuMYthIndEu9UdsQd2jjX1kHfgN8koqYRKXikXrFi/4kfI9w+B0wi2A2uAWSfwWbg05gCgdeSrbEV0l3fMw5j16uCnE6bRzi7K/1JaF+yuYd17iYU2QslJ4uJbtaFks5WUhNipV/SmpEa91rk2Q8C8+hwnvkqjvNeZFynZ6RpypTRieAV8ihJ7R2sCVCLosxI02Wzf4RYi2CgJlpzGHlzuWUFZU98QOHwnx+Dnq25a3K5lrd9gSAUKitttzUqBVuK2yoTqQhhSCGeym7/7vVAOaWu1PGAbktQ9vdrWiJc1AgMBAAECggEARD4xiVwJsrp3s4nPtHXRpCA0TPcyxxcyPGkpcHKlm0dCCcrQ3vo3+58focV+o3etKTd9Cz6U0WSUoHYAEco46FyOa5w21LCY581y22X/87x1rnRhQqdVuJY9D1r21GY2EV56RgcDVvHwWa8cm9v9HEzIP5S7dcun05zDq5bpl2unxRb6E3WdQ5WLamR/wrmwgHi/MNJQd4KQC7byUWE7Jy9rvQsvtLcINOuQGREfbs7QPJt+B9E2YkS6s010z8VaJu3nXRLphbpCUY7b3pVNwfnuGs0q6ypy+324ZcKfV3PzzJ6A0jq6Eij5C1pg/t8KCg+Qv1RHr5siSMcr2JkK4QKBgQDso/diy9W8V6RkI28gTrV90DkTgur9DBGFk5PKsn35XcqQkdct3nznfLbJW1zO7ZJ4JG9Fs6WoSwSGuy7vcY3aA4USFvQfA/QEsdG2/DMP9uJerGqKE+Ahxs1eKSW3Ou9P+MbnKHB/RAnIomiMYc0IB/k2ASiWi7ItMe/EtoYdGQKBgQCrmjCCw3GiTWTqBZJ/QvlvbC8uhyheEtWEdyUNYUKAjMgXRryZ1yx5ps//fAInzylc/aGh/8aucwYPAYkUeQkuKA1f3y03d2Zg7UQnYfCGfiFDJEqJL3ve44avi/mQOTyIk7NI6RL1mGBz0rojyEfa6hYT/eKjozEJEg6HJnmyfQKBgAx0IJvRcGEmF5+xgbKokcKaR7awKB/DF9T4zElZlWmfNv7evf1K/TXNiW0VYs/9Dr1F5Zk8eBZgRE+24CR3zGhR0Rn/nT9YnOn2VbwUj7diXc1vs3eqzhvY84vmDHcVIe0KgaU+qpT4Bq/JZEknCHxItyPRccpidbENNLochPhZAoGAWsexDhwyyzfCQQM9otFdf5Jty2F4+3tfNTqKgW+IbNUNLTMgpwnr31deBbwmr8SqDyWmEjtrcfIrrFiVmh0FvEM4ABXip8skf/ZE7cikI6IqGojiXXyfPSSEpe2Y0rFU0rPATrvuabp4nA1Ip5FWYfsgPuc6tHKqiC/jO6AhFUkCgYBVtO1Jb7uk9zp9IkXeFaNP/DASpHd2j4NdEgD4LSrFHSPfA4qcTntPUINeaP4nwaIRcnsz4GoKTYqQ9iyIV8vRL6RnRW82GjaoynBmzNq5LSpnSD1rDyxytuiilu/fMcb5URNkMsVKrDIA9djQbX1UUyr6QQhN9LnZ2tZ7CYdc+A==",
  pubKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiCWvxDZZesS1g1lQfilVt8l3X5aMbXg5WOCYdG7q5C+Qevw0upm3tyYiKIwzXbqexnPNTHwRU7Ul7t8jP6nNVS/jLm35WFy6G9qRyXqMc1dHlwjpYwRNovLc12iTn1C5lCqIfiT+B/O/py1eIwNXgqQf39GDMJ3SesonowWioMJNXm3o80wscLMwjeezYGsyHcrnyYI2LnwfIMTSVN4T92Yy77SmE8xPydcdkgUaFxhK16qCGXMV3mF/VFx67LpZm8Sw3v135hxYX8wG1tCBKlL4psJF4+9vSy4W+8R5ieeqhrvRH+2MKLiKbDnewzKonFLbn2aKNrJefXYY7klaawIDAQAB",
  isPath: false,
};



const nagad = new NagadGateway(config);
router.post("/nagad/payment",async(req,res)=>{
     try {
    console.log(req.body)
    console.log('Starting payment_nagad function');
    const data = req.body;

 
    // Duplicate transaction check
    console.log('Checking for duplicate transactions');
    const paymentConfig = {
      amount: data.amount,
      ip: data.ip,
      orderId: data.orderId,
      productDetails: { order_id: data.orderId },
      clientType: "PC_WEB",
    };
    console.log('Payment config:', paymentConfig);


    // Create Nagad payment
    const referenceId = `${Date.now()}`;
    console.log('Generated referenceId:', referenceId);

    let nagadResponse;
    console.log('Attempting to create Nagad payment');

    try {
      console.log('Calling nagad.createPayment with config:', paymentConfig);
      nagadResponse = await nagad.createPayment(paymentConfig);
      console.log('Nagad payment response:', JSON.stringify(nagadResponse, null, 2));
      console.log("nagad-payment-response", nagadResponse);
    } catch (error) {
      console.error('Error in nagad.createPayment:', error);
      console.log("Full error details:", {
        message: error.message,
        stack: error.stack,
        code: error.code,
        type: error.type,
        errno: error.errno
      });
      console.error("nagad-payment-creation-error:", error);
      return sendErrorResponse(
        res,
        "Failed to create Nagad payment: " + error.message,
        data.orderId
      );
    }

    if (!nagadResponse) {
      console.error("nagad-payment-creation-failed - No response received");
      return sendErrorResponse(
        res,
        `Payment creation failed: No response received from Nagad`,
        data.orderId
      );
    }

    console.log('Returning success response');
    return res.status(200).json({
      success: true,
      message: "Payment link created.",
      orderId: data.orderId,
      paymentId: nagadResponse.paymentId,
      link: nagadResponse,
      referenceId,
    });
  } catch (error) {
    console.error("payment_nagad fatal error:", {
      message: error.message,
      stack: error.stack,
      code: error.code,
      type: error.type,
      errno: error.errno
    });

  }
})

module.exports = router;