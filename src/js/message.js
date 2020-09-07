AV.init({
  appId: "6QEhBTOEUrHYTwQvuKyrn0rT-gzGzoHsz",
  appKey: "BmT8ng5MmIRlQvDltuvys8Ro",
  serverURL: "https://6qehbtoe.lc-cn-n1-shared.com",
});

// 示例代码
// let x = AV.Object.extend("jerry");
// let o = new x();
// o.save().then((o) => {
//   console.log("保存成功。");
// });

let query = new AV.Query("message");
query.find().then((messages) => {
  let array = messages.map((item) => item.attributes);
  array.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = `${item.name}: ${item.content}`;
    let messageList = document.querySelector("#messageList");
    messageList.appendChild(li);
  });
});

let myForm = document.querySelector("#postMessageForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = myForm.querySelector("input[name=name]").value;
  let content = myForm.querySelector("input[name=content]").value;
  let Message = AV.Object.extend("message");
  let message = new Message();
  message.save({ name: name, content: content }).then((object) => {
    let li = document.createElement("li");
    li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
    let messageList = document.querySelector("#messageList");
    myForm.querySelector("input[name=content]").value = "";
    messageList.appendChild(li);
  });
});
