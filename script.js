const handleSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector(".email").value;
  const message = document.querySelector(".message").value;
  const names = document.querySelector(".names").value;

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    let params = {
      from_name: names,
      email_id: email,
      message: message,
    };
    emailjs
      .send("service_9o5ssig", "template_lfewdxo", params)
      .then(function (res) {
        alert(
          `HELLO ${names}!, thank you for your Message, We will contact you late on your email: ${email},Thank you!!!`
        );
      });
  } else {
    alert(`${email} is an invalid email! Please try again!!!`);
  }
};

const getBlogs = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.toLocaleString("default", { month: "short" });
  let day = date.getDate();
  let mainwork = document.querySelector(".mainwork");
  let inner = document.querySelector(".inner");
  let classe = document.querySelector(".mainleft");

  let fromStorage = localStorage.getItem("blogs");
  let blogsResult = JSON.parse(fromStorage);
  if (blogsResult) {
    mainwork.innerHTML = blogsResult
      .map(
        (item) =>
          `<div class="mainleft blogO">
    <a class="imageo"><img src=${item.image} alt=""></a>
    <span><i class="fa-solid fa-xmark"></i></span>
    <div class="under">
    <div class="date">${month} ${day}, ${year}</div>
    <h3 class='kawr'>${item.title}</h3>
    <span>${item.body}</span>
    </div>
    </div>`
      )
      .join("");

    blogsResult.forEach((e) => {
      console.log(e);
      inner.innerHTML += `<div class="blog-header">
      <div class="blogO-title">${e.title}</div>
      <div class="blogO-date">${month} ${day}, ${year} <span> </span>. <span> </span> BY <span class="cl">BIENVENU</span></div>
     </div>
     <div class="blogO-main">
       <div class="blogO-photo">
         <img src="${e.image}" alt="">
       </div>
       <div class="blogger">${e.body}</div>
     </div>
     <div class="blog-comment">
              <div class="comment-header">
                <span class="number"></span>
                <span>Comments</span>
              </div>
              <div class="gi"></div>
              <div class="cc"></div>
            </div>
            <div class="blog-input-comment">
            <div class="section-content contacts-section-content">
              <div class="write"><span class="co">Write</span>  a comment</div>
              <div class="gg"></div>

              <form>
                <div class="form-group" style="width: 49%">
                  <input type="text" placeholder="Name" class="comment-names" required/>
                </div>
                <div class="form-group" style="width: 49%">
                  <input type="email" placeholder="Email" class="comment-email" required/>
                </div>
                <div class="form-group" style="width: 100%; padding-top: 10px">
                  <textarea
                    name="message"
                    cols="30"
                    rows="10"
                    placeholder="Comment"
                    class="comment-input"
                    required
                  ></textarea>
                </div>
                <div class="form-group">   
                  <button type="submit">SEND COMMENT <span class="fa-solid fa-arrow-right"></span></button>
                </div>
              </form>

            </div>
          </div>`;
    });
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
      body,
    };
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
    getBlogs();
  } else {
    let array = JSON.parse(localStorage.getItem("blogs") || "[]");
    const blog = {
      id: array.length + 1,
      title,
      image,
      body,
    };
    array.push(blog);
    localStorage.setItem("blogs", JSON.stringify(array));
    window.alert("Blog added successfuly");
    getBlogs();
  }
};
