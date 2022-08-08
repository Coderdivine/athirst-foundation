<img src="https://res.cloudinary.com/axgura/image/upload/v1659796245/IMG-20220806-WA0006_ztuc86.jpg" width="100%" height="48%"/>

## HELPING THE HELPLESS BY ATHIRST FOUNDATION

```js
//upload image function
const uploadImage=(img)=>{
//img = e.target.files[0];
 const formData = FormData();
 const img = formData.append("img",img);
 axios.post("https://athirst-backend.herokuapp.com/post-img",formData).then(res=>{
   alert(res.data.message);
 }).catch(err=>{alert(err.message)});
};

```

```js
// get image to show :)
const getImage=()=>{
 axios.post("https://athirst-backend.herokuapp.com/get-img").then(res=>{
   alert(res.data.message);
 }).catch(err=>{alert(err.message)});
};

```

```js
// send message to athrist foundation function
const postMail=(name,email,message)=>{
const data = {name,email,message};
 axios.post("https://athirst-backend.herokuapp.com/post-mail",data).then(res=>{
   alert(res.data.message);
 }).catch(err=>{alert(err.message)});
};

```

```js
// get message for athrist foundation 
const getMail=()=>{
 axios.post("https://athirst-backend.herokuapp.com/get-mail").then(res=>{
   alert(res.data.message);
 }).catch(err=>{alert(err.message)});
};

```
