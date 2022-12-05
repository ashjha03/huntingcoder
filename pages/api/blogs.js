// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  // fs.promises.readdir("blogdata", (err, data) => {
  //   let allBlogs = [];
  //   data.forEach(item => {
  //     fs.readFile(('/blogdata/' +item), (d) => {
  //       allBlogs.push(d);
  //     })
  //   })
  //   res.status(200).json(allBlogs)
  // })

  let data = await fs.promises.readdir("blogdata").then(list => list.filter(item => !/(^|\/)\.[^/.]/g.test(item)));
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' +item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }
  res.status(200).json(allBlogs)
}
