console.log(`CV reader`);

const Data = [

    {

        name: "Basit",
        age: "18",
        city: "Lahore",
        Specialities: "JavaScript",
        frame_Work: "React",
        image: "https://randomuser.me/api/portraits/men/27.jpg"


    }, {
        name: "Qasim",
        age: "19",
        city: "Multan",
        Specialities: "C++",
        frame_Work: "Bootstrap",
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        name: "Nabeela",
        age: "20",
        city: "Sialkot",
        Specialities: "Python",
        frame_Work: "Flask",
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    }, {
        name: "Ayesha",
        age: "17",
        city: "Lahore",
        Specialities: "java",
        frame_Work: "React",
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    }, {
        name: "Talha",
        age: "20",
        city: "Karachi",
        Specialities: "Django",
        frame_Work: "React",
        image: 'https://randomuser.me/api/portraits/men/29.jpg'
    }
]



function CV_Iterator(profiles) {
    let index = 0;
    return {

        next: function () {
            if (index < profiles.length) {
                return {
                    done: true,
                    value: profiles[index++]
                }

            }
            else {
                return {
                    done: false
                }
            }
        }
    }



}

let iterator = CV_Iterator(Data)
nextCV()
let next = document.getElementById(`next`).addEventListener(`click`, nextCV)
function nextCV() {
    console.log(`Clicked`)

    const candidate = iterator.next().value;
    let pic = document.getElementById(`pic`)
    let profile = document.getElementById(`profile`)
    if (candidate != undefined) {

        pic.innerHTML = `<img src='${candidate.image}'>`;

        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">My Name is ${candidate.name}</li>
    <li class="list-group-item">${candidate.age} years old</li>
    <li class="list-group-item">Lives in ${candidate.city}</li>
    <li class="list-group-item">Has Specialitis in ${candidate.Specialities}</li>
    <li class="list-group-item"> Best in Frame Work of ${candidate.frame_Work}</li>
    </ul>`


    }
    else {
        let alert = document.getElementById(`alert`)
        alert.innerHTML = ` 
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong>Finished!</strong> The Resume has been finished.
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>`
        setTimeout(() => {

            location.reload()
        }, 3000);
    }





}