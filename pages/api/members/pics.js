import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = "./public/uploads/members/pics";
  form.on('fileBegin', function(name, file) {
    var period = file.name.lastIndexOf('.')
    const initial = file.name.substring(0, period);
    const ext = file.name.substring(period + 1);
    const newName = initial+Date.now()+"."+ext;
    file.path= form.uploadDir + "/" + newName;
    res.json({fname: newName})
  });
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
  });
};