var counter = 0

const onClick = () => {
    document.getElementById('counter').innerText = counter + 1;
    counter++;
}

document.getElementById('topcoin').addEventListener('click', onClick)
