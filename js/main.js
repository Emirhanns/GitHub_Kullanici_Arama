const githubName = document.querySelector("#searchBox");
const form = document.querySelector("#searchForm");
const clearButton = document.querySelector("#clearButton")

const github = new Github();
const ui = new UI();

runEventListeners();


function runEventListeners() {
    form.addEventListener("submit", search);
    clearButton.addEventListener("click",clearInput)

}

function clearInput(){
    ui.clearInput();
}

function search(e) {
    const usernameInBox = githubName.value.trim();
    if (usernameInBox == null || usernameInBox == "") {
        alert("Lütfen bir kullanıcı adı giriniz")
    } else {
        github.getGithubData(usernameInBox)
        .then(response=>{
            ui.addUserProfileToUı(response.user);
            document.querySelector("#showRepo").addEventListener("click",()=>ui.showRepos(response.repo));
        })
        .catch(error=>console.log(error))
    }
    e.preventDefault();

}