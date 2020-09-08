!function () {
  let model = {
    init: function () {
      AV.init({
        appId: "6QEhBTOEUrHYTwQvuKyrn0rT-gzGzoHsz",
        appKey: "BmT8ng5MmIRlQvDltuvys8Ro",
        serverURL: "https://6qehbtoe.lc-cn-n1-shared.com",
      });
    },
    // 获取数据
    fetch: () => {
      let query = new AV.Query("message");
      return query.find(); // Promise 对象
    },
    // 创建数据
    save: (name, content) => {
      let Message = AV.Object.extend("message"); //连接对应数据库名字
      let message = new Message();
      return message.save({
        //要存的信息
        name: name,
        content: content,
      });
    },
  };
  var view = document.querySelector("section.message");

  var controller = {
    view: null,
    model: null,
    messageList: null,
    init: function (view, model) {
      this.view = view;
      this.model = model;

      this.messageList = view.querySelector("#messageList");
      this.form = view.querySelector("#postMessageForm");
      this.model.init();
      this.bindEvents();
      this.loadMessages();
    },
    loadMessages: function () {
      this.model.fetch().then((messages) => {
        let array = messages.map((item) => {
          return item.attributes;
        });
        array.forEach((item) => {
          let li = document.createElement("li");
          li.innerText = `${item.name}: ${item.content}`;
          this.messageList.appendChild(li);
        });
      });
    },
    bindEvents: function () {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.saveMessage();
      });
    },
    saveMessage: function () {
      console.log(1);
      let myForm = this.form;
      let name = myForm.querySelector("input[name=name]").value;
      let content = myForm.querySelector("input[name=content]").value;
      console.log(2);
      this.model.save(name, content).then(
        (object) => {
          console.log(3);
          let li = document.createElement("li");
          li.innerText = `${object.attributes.name}: ${object.attributes.content}`;
          this.messageList.appendChild(li);
          myForm.querySelector("input[name=content]").value = "";
          console.log(object);
        },
        (error) => console.log(error)
      );
    },
  };

  controller.init(view, model);
}.call();
