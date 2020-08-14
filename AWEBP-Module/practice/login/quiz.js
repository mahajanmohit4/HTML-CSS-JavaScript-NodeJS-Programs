console.log("welcome to quizz");

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let Question = document.getElementById("Question");
    let Option1 = document.getElementById("Option1");
    let quizz = localStorage.getItem("quizz");

    if (quizz == null) {
        quizzObj = [];
    } else {
        quizzObj = JSON.parse(quizz);
    }

    let myObj = {
        qus: Question.value,
        opt1: Option1.value
    };

    quizzObj.push(myObj);
    localStorage.setItem("quizz", JSON.stringify(quizzObj));
    Question.value = "";
    Option1.value = "";
    console.log(quizzObj);

    showquizz();
});

function showquizz(){
    let quizz = localStorage.getItem("quizz");
    if(quizz == null)
    {
        quizzObj = [];
    }else{
        quizzObj = JSON.parse(quizz);
    }
    let html = "";

    quizzObj.forEach(function(element, index) {
        html += `
                <div class="noteCard my-2 mx-2 card" style="width: 60rem;">
                        <div class="card-body">
                            <h5 class="card-title">${element.qus}</h5>
                            <p class="card-text">A. ${element.opt1}</p>
                            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                        </div>
                    </div>`;
      });

      let quizzElm = document.getElementById("quizz");
      if (quizzObj.length != 0) {
        quizzElm.innerHTML = html;
      } else {
        quizzElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}


// function showquizz() {
//     let quizz = localStorage.getItem("quizz");
//     if (quizz == null) {
//         quizzObj = [];
//     } else {
//         quizzObj = JSON.parse(quizz);
//     }
//     let html = "";

//     quizzObj.forEach(function (element, index) {
//         html += `
//                   <div class="card container" style="width: 60rem;">
        
//                     <div class="card-body">
//                       <h5 class="card-title">Question</h5>
//                       <p class="card-text">${element.qus}</p>
//                     </div>
//                     <ul class="list-group list-group-flush">
//                       <li class="list-group-item">A. ${element.opt1}</li>
//                       <li class="list-group-item">Dapibus ac facilisis in</li>
//                       <li class="list-group-item">Vestibulum at eros</li>
//                     </ul>
//                     <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
//                   </div>`;
//     });

//     let quizzElm = document.getElementById("quizz");
//     if (quizzObj.length != 0) {
//         quizzElm.innerHTML = html;
//     } else {
//         quizzElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
//     }
// }

function deleteNote(index) {
    //   console.log("I am deleting", index);
    
      let quizz = localStorage.getItem("quizz");
      if (quizz == null) {
        quizzObj = [];
      } else {
        quizzObj = JSON.parse(quizz);
      }
    
      quizzObj.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(quizzObj));
      showNotes();
    }