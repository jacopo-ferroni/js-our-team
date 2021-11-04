const members = [
    // 0
    {
        img : `img/angela-caroll-chief-editor.jpg`,
        name : `Angela Caroll`,
        role : `Chief Editor`,
    },

    // 1
    {
        img : `img/walter-gordon-office-manager.jpg`,
        name : `Walter Gordon`,
        role : `Office Manager`,
    },

    // 2
    {
        img : `img/angela-lopez-social-media-manager.jpg`,
        name : `Angela Lopez`,
        role : `Social Media Manager`,
    },

    // 3
    {
        img : `img/scott-estrada-developer.jpg`,
        name : `Scott Estrada`,
        role : `Chief Editor`,
    },

    // 4
    {
        img : `img/barbara-ramos-graphic-designer.jpg`,
        name : `Barbara Ramos`,
        role : `Graphic Designer`,
    }
];

const teamContainer = document.querySelector(`.team-container`);
console.log(members);

const btn = document.getElementById(`addMemberButton`);
btn.addEventListener(`click`, function() {
const newMember = {};

const newName = document.getElementById(`name`).value;
const newRole = document.getElementById(`role`).value;
const newImage = document.getElementById(`image`).value;

newMember.name = newName;
newMember.role = newRole;
newMember.img = newImage;
console.log(newMember);

members.push(newMember);
console.log(members);

for(let i = members.length - 1; i < members.length; i++) {
    const member = members[i];
    console.log(member);

    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${member.img}"
                alt="Wayne Barnett"
            />
            </div>
            <div class="card-text">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
        </div>
  </div>
    `;

}

});

for(let i = 0; i < members.length; i++) {
    const member = members[i];
    console.log(member);

    teamContainer.innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img
                src="${member.img}"
                alt="Wayne Barnett"
            />
            </div>
            <div class="card-text">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
        </div>
  </div>
    `;

}

