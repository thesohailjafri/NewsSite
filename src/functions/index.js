import dumImg from '../static/images/dummyNews.jpg'

const toCapitalize = (str) => {
    const arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)

    }
    const str2 = arr.join(" ")
    return (str2)
}

function numberWithCommas(x) {
    if (x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
    }
}

function imgError(image) {
    image.onerror = ""
    image.src = dumImg
    return true
}


export {
    toCapitalize,
    numberWithCommas,
    imgError
}