class UI {
    constructor() {
        this.profileContent = document.querySelector("#profileContent");
        this.searchBox = document.querySelector("#searchBox");
        this.tableContent = document.querySelector("#tableContent");
        this.isShowRepo = true;

    }

    addUserProfileToUı(user) {
        this.profileContent.innerHTML = `
        <div class="col-sm-12 col-md-4 col-lg-4">
            <div id="ppDiv" class="m-2">
                <img class="mt-2" src="${user.avatar_url}" id="pp">
                <hr style="border: 1px solid rgb(0, 0, 0); width: 50%;">
                <span class="mt-1 mb-1"><b>${user.name}</b></span>
            </div>

        </div>

        <div class="col-sm-12 col-md-8 col-lg-8">
            <div id="badgeDiv" class="mt-2">
                <button type="button" class="btn btn-dark">
                    Takipçiler <span class="badge text-bg-secondary">${user.followers}</span>
                </button>
                <button type="button" class="btn btn-success">
                    Takip Edilen <span class="badge text-bg-secondary">${user.following}</span>
                </button>
                <button type="button" class="btn btn-info">
                Repolar <span class="badge text-bg-secondary">${user.public_repos} </span>
                </button>
            </div>

            <div id="infoDiv" class="mt-3">
                <div>
                    <img class="info" src="./img/user-solid.svg" width="25" height="25">
                    <span>${user.company == null ? "" : user.company} </span>
                </div>
                <div>
                    <img class="info" src="./img/envelope-solid.svg" width="25" height="25">
                    <span>${user.email == null ? "" : user.email} </span>
                </div>
                <div>
                    <img class="info" src="./img/location-dot-solid.svg" width="25" height="25">
                    <span>${user.location == null ? "" : user.location} </span>
                </div>

                <div class="info">
                    <button class="btn btn-warning" id="showRepo">Repoları Göster</button>
                </div>
            </div>
        </div>
`

    }

    checkMessage() {
        const showRepoLink = document.querySelector("#showRepo");
        if (this.isShowRepo) {
            showRepoLink.textContent = "Repoları Göster";
        } else {
            showRepoLink.textContent = "Repoları Kapat";
        }
    }


    showRepos(repos) {
        if (this.isShowRepo) {
            if (repos != null && repos.length > 0) {
                let sayac = 1;
                repos.forEach(repo => {
                    this.tableContent.innerHTML += `
                    <tr>
                    <th scope="row">${sayac}</th>
                    <td>${repo.name}</td>
                    <td>${repo.created_at}</td>
                  </tr>
                    `;
                    sayac++;
                })
            }
            this.isShowRepo = false;
            this.checkMessage();
        } else {
            this.isShowRepo = true;
            this.checkMessage();
            this.tableContent.innerHTML = "";
        }


    }


    clearInput() {
        this.searchBox.value = "";
        this.profileContent.innerHTML = "";
    }
    
}

