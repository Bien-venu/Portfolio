const handleSubmit = (event) => {
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const names = document.querySelector(".names").value;
  event.preventDefault();

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  ) {
    alert(
      `HELLO ${names}!, thank you for your Message, We will contact you late on your email: ${email},Thank you!!!`
    );
  } else {
    alert(`${email} is an invalid email! Please try again!!!`);
  }
};

// 



const getBlogs = () => {
  let result = localStorage.getItem("test");
  let date= new Date();
  
  let fromStorage = localStorage.getItem("blogs");
  let blogsResult = JSON.parse(fromStorage);
  console.log(blogsResult)
  if (blogsResult){
    blogsResult.map((item)=>{
      document.querySelector('.cc').innerHTML +=`
    <div class="comments">
                <div class="comment-img">
                  <img src="./imgs/comment image.jpg" alt="">
                </div>
                <div class="comment-message">
                  <div class="commenter">${item.name}</div>
                  <div class="comment-date">${date}</div>
                  <div class="commente">
                  ${item.comment}
                  </div>
                </div>                
              </div>
    `
  })
  }
  
}

const handle=(e)=>{
  e.preventDefault();
  let name = document.querySelector('.comment-names').value;
  let email = document.querySelector('.comment-email').value;
  let comment = document.querySelector('.comment-input').value;
 
  if(localStorage.getItem("blogs") == null){
  let array = [];
    const blog = {
      id:1,
    name,
    email,
    comment
  }
  array.push(blog);
  localStorage.setItem("blogs", JSON.stringify(array));
  window.alert("Blog added successfuly");
    getBlogs();
  } else {
    
    let array = JSON.parse(localStorage.getItem("blogs"));
    const blog = {
      id:(array.length+1),
    name,
    email,
    comment
  }
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
  window.alert("Blog added successfuly");
    getBlogs();
  }
}

const editBlog = (blogId) => {
  console.log(blo)
  let array = JSON.parse(localStorage.getItem("blogs"));
  array.map((item)=>{
    if(blogId == item.id){
      item.name = "New Value"
    }
  })
  localStorage.setItem("blogs", JSON.stringify(array));
}