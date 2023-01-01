const handleSubmit = (event) => {
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const names = document.querySelector(".names").value;
  event.preventDefault();

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
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
  let date = new Date();
  let year = date.getFullYear();
  let month = date.toLocaleString("default", { month: "short" });
  let day = date.getDate();

  let fromStorage = localStorage.getItem("blogs");
  let blogsResult = JSON.parse(fromStorage);
  console.log(blogsResult);
  if (blogsResult) {
    document.querySelector(".mainwork").innerHTML = blogsResult.map(
      (item) => (`
    <label for="blogO">
              <div class="mainleft blogO">
                <a class="imageo"><img src=${item.image} alt=""></a>
                <div class="under">
                  <div class="date">${month} ${day}, ${year}</div>
                  <h3>${item.title}</h3>
                  <span>${item.body}</span>
                </div>
              </div>
            </label>`)
    );
    document.querySelector(".number").innerHTML = blogsResult.length;
  }
};

const handle = (e) => {
  e.preventDefault();
  let title = document.querySelector(".blog-title").value;
  let image = document.querySelector(".blog-image").value;
  let body = document.querySelector(".blog-body").value;

  if (localStorage.getItem("blogs") == null) {
    let array = [];
    const blog = {
      id: 1,
      title,
      image,
      body
    };
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
    getBlogs();
  } else {
    let array = JSON.parse(localStorage.getItem("blogs"));
    const blog = {
      id: array.length + 1,
      title,
      image,
      body
    };
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
    getBlogs();
  }
};

const editBlog = (blogId) => {
  console.log(blo);
  let array = JSON.parse(localStorage.getItem("blogs"));
  array.map((item) => {
    if (blogId === item.id) {
      item.title = "New Value";
    }
  });
  localStorage.setItem("blogs", JSON.stringify(array));
};
