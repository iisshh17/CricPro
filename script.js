const players = [
    {
        Name : "Virender Sehwag",
        source: "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sehwag.png"
    },
    {
        Name: "Sachin Tendulkar",
        source: "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sachin.png" 
    },
    {
        Name: "Gautam Gambhir",
        source: "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-gambhir.png"
    },
    {
        Name: "Virat Kohli",
        source: "https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-virat-kohli.png"
    },
    {
        Name:"MS Dhoni (c & wk)",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-dhoni.png"
    },
    {
        Name:"Yuvraj Singh",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-yuvraj.png"
    },
    {
        Name:"Suresh Raina",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-suresh-raina.jpg"
    },
    {
        Name:"Harbhajan Singh",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-harbhajan.jpg"
    },
    {
        Name:"Zaheer Khan",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-zaheer-khan.jpg"
    },
    {
        Name:"Munaf Patel",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-munaf-patel.jpg"
    },
    {
        Name:"S Sreesanth",
        source:"https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/cricpro-sreeshanth.jpg"
    }

];

const imgdiv = document.getElementById("imgDiv");
const man = document.getElementById("man");
const info = document.getElementById("info");
const table = document.getElementById("blur");

function display(index){
    imgdiv.style.display = "block";
    table.style.filter ='blur(3px)';
    info.setAttribute('src',players[index].source);

}

function clearDisplay(){
    imgdiv.style.display='none';
    man.innerText = '';
    info.setAttribute('src','');
    table.style.filter = 'none';
}

