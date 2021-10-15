//สร้าง Class ไว้เพื่อเก็บข้อมูลส่วนตัวทั่วไปของนักศึกษา
class student{
    constructor(stdid,fname,lname,faculty,branch){
        this._stdid = stdid;
        this._firstname = fname;
        this._lastname = lname;
        this._faculty = faculty;
        this._branch = branch;
    }
}

//สร้าง Class เพื่อเก็บรายละเอียดรายวิชา (เพิ่มการสร้าง Class เข้ามาเพื่อเป็นระเบียบในการเก็บเป็น Array)
class subject{
    constructor(courseCode , courseName , credit){
        this._courseCode = courseCode;
        this._courseName = courseName;
        this._credit = credit;
    }
    //function เรียกใช้หาต้องการเปลี่ยนแปลงหน่วยกิตของรายวิชานี้ (เพิ่มขึ้นเพื่อตอบโจทย์หากต้องการเปลี่ยนข้อมูล)
    changeCredit(credit){
        this._credit = credit;
        return true;
    }
}

//สร้าง Class เพื่อแยกเทอมแต่ละเทอม ประกอบไปด้วยเทอมที่เท่าไร Array ของ coures ที้่ลง และ เกรดที่ได้
class Semster{
    constructor(no , course , grade){
        this._No = no;
        this._course = course;
        this._grade = grade;
        this._gpa = this.calculateGPA(this._course , this._grade);
    }
    //คำรวณหา gpa จาก course ที่ลง กับ grade ที่ได้
    calculateGPA(course , grade){
        let grades = this.getAllScore();
        let allcredit = this.getAllCredit();
        let gpa = grades / allcredit;
        return  gpa;
    }
    getAllCredit(){
        let allcredit = 0;
        for(let i = 0; i < this._course.length; i++){
            allcredit += this._course[i]._credit;
        }
        return allcredit;
    }
    getAllScore(){
        let score = 0;
        for(let i = 0; i < this._course.length; i++){
            score += this._course[i]._credit * this._grade[i];
        }
        return score;
    }

}

//ทดลองสร้างรายวิชา และเก็บรวมใน Array
//term 1
const sj1 = new subject('INT101' , 'Programming' ,3);
const sj2 = new subject('GEN121' , 'Learning and PSS' , 3);
const sj3 = new subject('GEN101' , 'Physical' ,1);
const sj4 = new subject('INT100' , 'Programing Fun.' ,3);
const sj5 = new subject('INT114' , 'Discrete' , 3);
const sj6 = new subject('INT102' , 'Web Tech' ,1);
const sj7 = new subject('LNG120' , 'English 1' ,3);
//term 2
const sj8 = new subject('GEN111' , 'MAN AND ETHICS OF LIVING' ,3);
const sj9 = new subject('INT103' , 'ADVANCED PROGRAMMING' , 3);
const sj10 = new subject('INT104' , 'USER EXPERIENCE DESIGN' ,3);
const sj11 = new subject('INT105' , 'Basic SQL' ,1);
const sj12 = new subject('INT107' , 'COMPUTING PLATFORMS TECHNOLOGY' , 3);
const sj13 = new subject('INT200' , 'DATA STRUCTURE & ALGORITHM' ,1);
const sj14 = new subject('LNG220' , 'English 2' ,3);

let sjterm1 = [sj1,sj2,sj3,sj4,sj5,sj6,sj7];
let sjterm2 = [sj8,sj9,sj10,sj11,sj12,sj13,sj14];

//ทดลองสร้างข้อมูลนักเรียน
let s1 = new student('Pichaya' , 'Pairin','SIT','IT');

//ทดลองสร้าง grade ที่ได้
let gradeterm1 = [3.5,3,3.5,2,3.5,3.5,3];
let gradeterm2 = [4,3.5,3.5,3.5,3.5,2.5,3];

let term1 = new Semster(1 , sjterm1 , gradeterm1);
let term2 = new Semster(2 , sjterm2 , gradeterm2);
console.log(term1);
// console.log(term2);

//สร้าง Class สำหรับเก็บผลการเรียนของนักศึกษา (ทั้งหมดทุกเทอม) โดยสามารถบอกได้ทุกอย่างตามที่โจทย์ต้องการ
//ข้อมูลอ้างอิงที่ใช้มาจากข้อมูลของในภาคการศึกษา ที่ 1/2563 ของนักศึกษา
class AcademicResult{
    constructor(student , term){
        this._student = student;
        this._allterm = term;
    }
    //2.2 จำนวนหน่วยกิจในแต่ละเทอมที่ลง และ จำนวนหน่วยกิจรวม  
    getCredit(){
        let all = 0;
        for(let i of this._allterm){
            console.log(`This credit Term1 : ${i.getAllCredit()}`);
            all += i.getAllCredit();
        }
        console.log(`This All credit : ${all}`);
    }
    //2.3 แปลงเกรดที่ได้รับมาจากตัวอักษรเป็นตัวเลข
    //2.4 แต้มคะแนน
    getScore(){
        let score = 0;
        for(let i of this._allterm){
            score += i.getAllScore();
        }
    return score;
    }
}

//สร้าง Array ไว้เก็บ term ทั้งหมด
let arrayofterm = [term1,term2];
//สร้าง Object จาก Class AcademicResult
let AcdResult = new AcademicResult(s1,arrayofterm);
AcdResult.getCredit();
console.log(`This All Score ${AcdResult.getScore()}`);