export const EMAIL_VERIFY_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Email Verify</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #f4f7fa;
    }
    table, td {
      border-collapse: collapse;
    }
    .container {
      width: 100%;
      max-width: 520px;
      margin: 50px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0px 6px 18px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #4C83EE, #22D172);
      color: #fff;
      padding: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .main-content {
      padding: 35px 30px 40px;
      color: #333;
    }
    .button {
      width: 100%;
      background: #22D172;
      text-decoration: none;
      display: inline-block;
      padding: 14px 0;
      color: #fff;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
      border-radius: 8px;
      letter-spacing: 1px;
    }
    .footer {
      background: #f1f1f1;
      text-align: center;
      font-size: 13px;
      padding: 15px;
      color: #555;
    }
    @media only screen and (max-width: 480px) {
      .container { width: 90% !important; }
      .button { width: 70% !important; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tr>
      <td align="center">
        <table class="container">
          <tr>
            <td class="header">Verify Your Email</td>
          </tr>
          <tr>
            <td class="main-content">
              <p style="font-size:16px; line-height:1.6;">
                You are just one step away from verifying your account for this email: 
                <span style="color:#4C83EE; font-weight:600;">{{email}}</span>.
              </p>
              <p style="font-size:15px; font-weight:600; margin:18px 0;">
                Use the OTP below to verify your account:
              </p>
              <p class="button">{{otp}}</p>
              <p style="font-size:14px; margin-top:20px; color:#666;">
                This OTP is valid for 24 hours.
              </p>
              <p style="margin-top:30px; font-size:15px;">
                Best regards From,<br><strong>Sujay</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              © 2025 All rights reserved | Made by Sujay
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <title>Password Reset</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" type="text/css">
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
      background: #f4f7fa;
    }
    table, td {
      border-collapse: collapse;
    }
    .container {
      width: 100%;
      max-width: 520px;
      margin: 50px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0px 6px 18px rgba(0,0,0,0.08);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #ff6a5b, #ff9a44);
      color: #fff;
      padding: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .main-content {
      padding: 35px 30px 40px;
      color: #333;
    }
    .button {
      width: 100%;
      background: #ff6a5b;
      text-decoration: none;
      display: inline-block;
      padding: 14px 0;
      color: #fff;
      font-size: 16px;
      text-align: center;
      font-weight: bold;
      border-radius: 8px;
      letter-spacing: 1px;
    }
    .footer {
      background: #f1f1f1;
      text-align: center;
      font-size: 13px;
      padding: 15px;
      color: #555;
    }
    @media only screen and (max-width: 480px) {
      .container { width: 90% !important; }
      .button { width: 70% !important; }
    }
  </style>
</head>

<body>
  <table width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
    <tr>
      <td align="center">
        <table class="container">
          <tr>
            <td class="header">Password Reset Request</td>
          </tr>
          <tr>
            <td class="main-content">
              <p style="font-size:16px; line-height:1.6;">
                We received a password reset request for your account: 
                <span style="color:#4C83EE; font-weight:600;">{{email}}</span>.
              </p>
              <p style="font-size:15px; font-weight:600; margin:18px 0;">
                Use the OTP below to reset your password:
              </p>
              <p class="button">{{otp}}</p>
              <p style="font-size:14px; margin-top:20px; color:#666;">
                The password reset OTP is valid for the next 15 minutes.
              </p>
              <p style="margin-top:30px; font-size:15px;">
                Best regards From,<br><strong>Sujay</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td class="footer">
              © 2025 All rights reserved | Made by Sujay
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
