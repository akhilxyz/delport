
export const DRIVERAPPLICATION = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>...</head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>New Driver Application</h1>
        </div>
        <div class="content">
          <p><span class="field"><strong>Name:</strong></span> ${data.firstName} ${data.lastName ?? ''}</p>
          <p><span class="field"><strong>Email:</strong></span> ${data.email}</p>
          <p><span class="field"><strong>Phone:</strong></span> ${data.phone}</p>
          <p><span class="field"><strong>Driver License Number:</strong></span> ${data.driverLicense}</p>
          <p><span class="field"><strong>Experience:</strong></span> ${data.exp}</p>
          <p><span class="field"><strong>Applying For:</strong></span> ${data.selectedValue}</p>
          <p><span class="field"><strong>Message:</strong></span></p>
          <p>${data.msg}</p>
        </div>
        <div class="footer">
          <p>This is an automated email. Please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}




export const CONTACTFORMTEMPLATE = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>...</head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>New Lead</h1>
        </div>
        <div class="content">
          <p><span class="field"><strong>Name:</strong></span> ${data.firstName} ${data.lastName ?? ''}</p>
          <p><span class="field"><strong>Email:</strong></span> ${data.email}</p>
          <p><span class="field"><strong>Phone:</strong></span> ${data.phone}</p>
          <p><span class="field"><strong>Message:</strong></span></p>
          <p>${data.msg}</p>
        </div>
        <div class="footer">
          <p>This is an automated email. Please do not reply.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}


