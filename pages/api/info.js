// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function infoAPI(req, res) {
  res.status(200).json({
    firstName: 'Cuong',
    lastName: 'Nguyen',
    dob: '26/12/1991',
    gender: 'Pede'
  })
}
