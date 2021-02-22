import { db } from '../src/db';
import {spawn} from 'child_process';
console.log(spawn);
async function getUserData(){
    const data = db.collection('users').doc('3OLLxLj7dmLbRbb2MPFT');
    const doc = await data.get();
    if (!doc.exists) {
      console.log('No such document!');
    } else {
      console.log('Document data:', doc.data());
    }
    console.log(doc.get('password'));
    const python = spawn('python', ['script1.py','Xinjibiao','D-55 ASB']);
}
getUserData();