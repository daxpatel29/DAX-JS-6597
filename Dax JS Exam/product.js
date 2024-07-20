
let data = document.getElementById("Products")


function addProduct() {
    let t = document.getElementById("inp-title").value;
    let p = document.getElementById("inp-price").value;
    let i = document.getElementById("inp-img").value;
    let c = document.getElementById("inp-cat").value;

    data.push({
        title: title,
        price: price,
        image: image,
        category: category,
    }
    );

    window.localStorage.setItem("data");

    displayData(data);

}

function displayData() {
    let dataTable = document
        .getElementById("data")

    dataTable.innerHTML = "";
    data.forEach((element, index) => {
        let tRow = document.createElement("tr");
        let tdTitle = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdImage = document.createElement("td");
        let tdCat = document.createElement("td");

        tdTitle.innerHTML = element.title;
        tdPrice.innerHTML = element.price;
        tdImage.innerHTML = element.image;
        tdCat.innerHTML = element.category;

        row.append(tdTitle, tdPrice, tdImage, tdCat);
        dataTable.append(tRow);
    });
}

function editProduct() {
    let sbm = document.getElementById("submit");
    sbm.value = "Update";

    let inpTitle = document.getElementById("inp-title");
    let inpPrice = document.getElementById("inp-price");
    let inpImage = document.getElementById("inp-img");
    let inpCat = document.getElementById("inp-cat");
    let inpIndex = document.createElement("input");

    inpTitle.value = data[index].title;
    inpPrice.value = data[index].name;
    inpImage.value = data[index].age;
    inpCategory.value = data[index].category;
    inpIndex.value = index;


    data.append(inpIndex);
}

function update() {
    let inpTitle = document.getElementById("inp-title");
    let inpPrice = document.getElementById("inp-price");
    let inpImage = document.getElementById("inp-img");
    let inpCat = document.getElementById("inp-cat");
    let index = document.getElementById("inp-index");

    data[index.value] = {
        title: inpTitle.value,
        price: inpPrice.value,
        image: inpImage.value,
        category: inpCat.value    };

    window.localStorage.setItem("data");

    let sbm = document.getElementById("submit");
    sbm.value = "Submit";
    displayData();
}

function deleteData(index) {
    data = document.getElementById("Products")
    data.splice(index, 1);
    window.localStorage.setItem("data");
    displayData();
}

displayData();

