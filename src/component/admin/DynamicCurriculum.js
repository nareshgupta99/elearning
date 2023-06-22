import $ from "jquery";

let file = [];
let t;
let data = [];
var temp = {
  title: "",
  objective: "",
};
let dynamicId = 0;
let fileDynamicId = 0;
var sectionContainer = $("#section-container");

class DynamicCurriculum {
  // for adding dynamic section

  sectionButton() {
    $("#section-button").click(function (e) {
     document.createElement(sectionContainer).appendChild(
        '<div class="mt-4 p-2" id="section" style="background-color: #f7f9fa"> <div class="d-flex justify-content-between "> <label>New Section:</label> <input type="button" class=" " value="Add Section" id="add-section" onclick="handleAddSection()" /></div><div class="m-2"><input type="text" required class="w-75" placeholder="Enter a Title" id="title" name="title" /></div>    <div class="m-2"> What will students be able to do at the end of this section?<input type="text" class="w-75" placeholder="Enter a Learning Objective" required id="section-objective" name="section-objective" /></div> </div>'
      );
      $("#section-button").addClass("d-none");
      $("#close-button").removeClass("d-none");
    });
  }

  // for adding dynamic section
  closeButton() {
    $("#close-button").click(function () {
      $("#section").remove();
      $("#section-button").removeClass("d-none");
      $("#close-button").addClass("d-none");
    });
  }

  // handle  add section

  addFileSection() {
    let container = "#dynamic-file-container";
    $("#dynamic-file-container").click(function () {});
  }

  renderSection() {
    console.log("hello");
    let container = $(".complte-course-container");
    // $(container).append(`<div id="${dynamicId+"renderd-section"}" class="mt-4  border border-black"  style="background-color: #f7f9fa"><input class="fw-bold ms-3 mt-3 border-0 title-label" id="${dynamicId+"input"}" value="${temp.title}" readonly></input><input clss="" style="margin-left: 21em;" type="button" class="mt-1 mb-2 edit" value="edit" id="${dynamicId+"edit"}" onclick="handleEditSection(event)"/><input class="" style="margin-left: 1em;" type="button" class="mt-1 mb-2 " value="delete" id="${dynamicId+"delete"}" onclick="handleDeleteSection(event)"  /><div class="m-2 border border-black "><p class="m-2"><a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">toogler</a></p><div class="collapse" id="collapseExample"><div class="card card-body"></div></div>  </div>  <div></div>`)
    $(container).append(`<div id="${
      dynamicId + "renderd-section"
    }" class="mt-4  border border-black"  style="background-color: #f7f9fa">
    <input class="fw-bold ms-3 mt-3 border-0 title-label" id="${
      dynamicId + "input"
    }" value="${temp.title}"name="lecture" readonly></input>
    <input clss="" style="margin-left: 21%;" type="button" class="mt-1 mb-2 edit" value="edit" id="${
      dynamicId + "edit"
    }" onclick="handleEditSection(event)"/>
    <input class="" style="margin-left: 1em;" type="button" class="mt-1 mb-2 " value="delete" id="${
      dynamicId + "delete"
    }" onclick="handleDeleteSection(event)"  />
    <div class="accordion accordion-flush" id="accordionFlushExample">
     <div class="accordion-item"> <h2 class="accordion-header" id="">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${dynamicId}" aria-expanded="false" aria-controls=""> 
      Accordion Item #3  </button>   </h2><div id="flush-collapse${dynamicId}" class="accordion-collapse collapse unique" aria-labelledby="" data-bs-parent="#accordionFlushExample"> 
     <div class="accordion-body" id="accordion-body${dynamicId}">
     <input type="button" class="px-2 mx-auto position-relative " style="left:90%" value="Add Video" id ="${dynamicId}" onClick="addInputFile(event)" />
     
     </div> </div></div></div>
    <div></div>`);
    $("#section-count").val(dynamicId);
    dynamicId++;
  }

  
  handleAddSection() {
    let title = $("#title").val();
    let objective = $("#section-objective").val();
    temp.title = title;
    temp.objective = objective;
    console.log(temp);
    data = [...data, temp];
    // renderSection();
    // $("#title").val("")
    //$("#section-objective").val("")
    $("#section").remove();
    $("#section-button").removeClass("d-none");
    $("#close-button").addClass("d-none");
  }


  handleEditSection(event) {
    let str = event.target.id;
    t = str.substr(0, 1);
    t = t + "input";
    $(`#${t}`).removeAttr("readonly");
    $(`#${t}`).css("border", "1px solid ");
  }

  handleDeleteSection(event) {
    let str = event.target.id;
    t = str.substr(0, 1);
    t = t + "renderd-section";
    console.log($(`#${t}`));
    $(`#${t}`).remove();
  }

  addInputFile(event) {
    fileDynamicId++;
    let str = event.target.id;
    str = "accordion-body" + str;
    $(`#${str}`).append(`<div class="mb-3 d-flex gap-3 " id="${
      fileDynamicId + "file"
    }">
        <input class="form-control formFile" class="w-50" type="file" id="" name="file${
          temp.title
        }" accept="video/*">
        <input type="button" value="Delete" id="db${
          +fileDynamicId + "file"
        }" onClick="deleteInputFile(event)" />
      </div>`);
  }

  deleteInputFile(event) {
    let button = event.target.id;
    let file = button.substr(2, button.length);
    $(`#${file}`).remove();
  }
}


export default new DynamicCurriculum;