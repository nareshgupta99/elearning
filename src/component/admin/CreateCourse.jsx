import React, { useState } from 'react';
import '../admin/create-course.css';
import  image from '../../images/image.jpg';
import CourseService from '../../service/CourseService';

function CreateCourse() {



	const [course,setCourse]=useState({
		courseName:"",
		courseDescription:"",
		language:"",
		level:"",
		category:"",
		courseImage:""

	})

	function handleData(e){
		console.log(course)
		let name=e.target.name;
		let value=e.target.value;
		setCourse({...course,[name]:value})
	}

	 function handleSubmit(e){
		e.preventDefault();
		CourseService.createCourse(course).then((resp)=>{
			console.log(resp.data)
		}).catch((err)=>{
			console.log(err)
		})
	 }


  return (
    
        <div
	class="  course-container d-flex flex-column justify-content-center ">
	<div class=" container course p-3" style={{height:"100%"}}>
		<h3 class="fw-bolder">Course landing page</h3>
		<hr />
		<p class="mt-5">Your course landing page is crucial to your
			success on Udemy. If itâs done right, it can also help you gain
			visibility in search engines like Google. As you complete this
			section, think about creating a compelling Course Landing Page that
			demonstrates why someone would want to enroll in your course. Learn
			more about creating your course landing page and course title
			standards.</p>
			<form method="post" action="create-course" enctype="multipart/form-data">
		<div>
			<h4 class="fs-5 fw-bold">Course title</h4>
			<div class="d-flex course-subcontainer align-items-center">
				<input type="text" placeholder="insert your course title " name="courseName" onChange={handleData} value={course.courseName}
					class="input" required />
				<p class="pe-2" style={{color: "grey"}} id="title-range">60</p>
			</div>
			<p class="info">Your title should be a mix of attention-grabbing,
				informative, and optimized for search</p>
		</div>

		<div class="text-editor">
			<h4 class="fs-5 fw-bold">Course Description</h4>
			<section class="mx-auto mt-4">
			<div class="row">
				<div class="col">
					<div class="first box">
						<input id="font-size" type="number" value="16" min="1" max="100"
							onchange="f1(this)" />
					</div>
					<div class="second box">
						<button class="create-course-btns" type="button" onclick="f2(this)">
							<i class="fa-solid fa-bold"></i>
						</button>
						<button class="create-course-btns" type="button" onclick="f3(this)">
							<i class="fa-solid fa-italic"></i>
						</button>
						<button class="create-course-btns" type="button" onclick="f4(this)">
							<i class="fa-solid fa-underline"></i>
						</button>
					</div>
					<div class="third box">
						<button class="create-course-btns" type="button" onclick="f5(this)">
							<i class="fa-solid fa-align-left"></i>
						</button>
						<button class="create-course-btns" type="button" onclick="f6(this)">
							<i class="fa-solid fa-align-center"></i>
						</button>
						<button class="create-course-btns" type="button" onclick="f7(this)">
							<i class="fa-solid fa-align-right"></i>
						</button>
					</div>
					<div class="fourth box">
						<button class="create-course-btns" type="button" onclick="f8(this)">aA</button>
						<button class="create-course-btns" type="button" onclick="f9()">
							<i class="fa-solid fa-text-slash"></i>
						</button>
						<input type="color" onchange="f10(this)" />
					</div>
				</div>
			</div>

			<div class="row mt-1">
				<div class="col">
					<textarea id="textarea1"
						placeholder="insert your course description." name="courseDescription" value={course.courseDescription} onChange={handleData}></textarea>
				</div>
			</div>
			</section>

		</div>
		<div class="d-flex gap-4 mt-5">
			<h4 class="fs-5 fw-bold">Basic info</h4>

			<select name="language"
				class="form-select form-select-lg mb-3 w-25 border-black border-1" onChange={handleData} value={course.language}
				aria-label=".form-select-lg example">
				<option selected >---Select Language---</option>
				<option value="English(US)">English (US)</option>
				<option value="English(UK)">English (UK)</option>
				<option value="Hindi">Hindi</option>
			</select> <select name="level" onChange={handleData}
				class="form-select form-select-lg mb-3 w-25 border-black border-1"
				aria-label=".form-select-lg example">
				<option selected >---Select Level---</option>
				<option value="Beginner">Beginner Level</option>
				<option value="Intermediate">Intermediate Level</option>
				<option value="Expert">Expert Level</option>
				<option value="All">All Levels</option>
			</select> <select name="category" onChange={handleData}
				class="form-select form-select-lg mb-3 w-25 border-black border-1"
				aria-label=".form-select-lg example">
				<option selected >---Select Category---</option>
				<option value="Development">Development</option>
				<option value="Business">Business</option>
				<option value="Finance & Accounting">Finance & Accounting</option>
				<option value="IT & Software">IT & Software</option>
				<option value="Design">Design</option>
			</select>
		</div>




		<div class="mt-4">
			<h4 class="fs-5 fw-bold">Course image</h4>
			<div class="d-flex">
				<div>
					<img src={course.courseImage} width="480px" height="270px"  id="renderImage"  />
				</div>

				<div class="p-2">
					<p>Upload your course image here. It must meet our course image
						quality standards to be accepted. Important guidelines: 750x422
						pixels; .jpg, .jpeg,.gif, or .png. no text on the image.</p>
					<div>
						<input class="form-control form-control-lg" id="formFileLg" onChange={handleData}
							type="file"  name="courseImage" {...course.courseImage===image?"disabled":"disabled"}/>
					</div>
				</div>
			</div>
		</div>

		
<input type="submit" value="Create Course" class="mt-2" onClick={handleSubmit}/>
</form>
	</div>
    </div>

   
  )
}

export default CreateCourse