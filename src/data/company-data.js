const email = "info@goldenmileinc.com"
const phone = "+13177655600"


const companyData = {
    name: 'Golden Mile',
    description:'Setting The Gold Standard In Transport',
    contact: {
        phone: {
            text: '+1 (317) 765-5600',
            link: `tel:${phone}`
        },
        email: email
    },
    office: [{
        id: 1,
        officeName: 'Headoffice',
        link: 'https://www.google.com/maps/place/1702+S+Belmont+Ave,+Indianapolis,+IN+46221,+USA/@39.742986,-86.1985871,17z/data=!4m6!3m5!1s0x886b59c2c2c3cdfb:0x76a8b6666d7a75e!8m2!3d39.7432716!4d-86.1973584!16s%2Fg%2F11b8yn098j?entry=ttu',
        status: '1702 S Belmont Ave, Indianapolis, IN 46221, USA',
        mailAddress: `mailto:${email}`,
        email: email,
        tel: `tel:${phone}`,
        number: '+1 (317) 765-5600',
    }]

}
export default companyData;