async function GetSayHelloData(name){
    console.log(name);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh1/' + name);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetAdd2NumbersData(num1, num2){
    console.log(num1, num2);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh2/' + num1 + '/' + num2);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetAskingQuestionsData(name, time){
    console.log(name, time);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh3/' + name + '/' + time);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetGreaterData(num1, num2){
    console.log(num1, num2);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh4/' + num1 + '/' + num2);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetMadLibData(savedInput, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10, savedInput11){
    console.log(savedInput, savedInput2, savedInput3, savedInput4, savedInput5, savedInput6, savedInput7, savedInput8, savedInput9, savedInput10, savedInput11);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh5/' + savedInput + "/" + savedInput2 + "/" + savedInput3 + "/" + savedInput4 + "/" + savedInput5 + "/" + savedInput6 + "/" + savedInput7 + "/" + savedInput8 + "/" + savedInput9 + "/" + savedInput10 + "/" + savedInput11);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetOddOrEvenData(num1){
    console.log(num1);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh6/' + num1);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetReverseItData(num1){
    console.log(num1);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniCh7/' + num1);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetRestaurantPickerData(num1){
    console.log(num1);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/miniChRestaurant/' + num1);
    const data = await response.text();
    console.log(data);
    return data;
}

async function GetStudentDirectoryData(name){
    console.log(name);
    const response = await fetch('https://rodriguezmallforonecontrollers.azurewebsites.net/Endpoint/GetStudentByFirstName/' + name);
    const data = await response.json();
    console.log(data);
    return data;
}


export {GetSayHelloData, GetAdd2NumbersData, GetAskingQuestionsData, GetGreaterData, GetMadLibData, GetOddOrEvenData, GetReverseItData, GetRestaurantPickerData, GetStudentDirectoryData}