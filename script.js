// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const getArrayByName = track => {
    switch(track)
    {
        case 'kicks':
            return kicks;
        case 'snares':
            return snares;
        case 'hiHats':
            return hiHats;
        case 'rideCymbals':
            return rideCymbals;
        default:
            return;
    }
};

const toggleDrum = (track, index) => {
    let arr = getArrayByName(track);
    if(!arr || index > 15 || index < 0)
    {
        return;
    }
    arr[index] = !arr[index];
};

const clear = track => {
    let arr = getArrayByName(track);
    if(arr)
    {
        arr.fill(false);
    }
};

const invert = track => {
    let arr = getArrayByName(track);
    if(arr)
    {
        for(let i = 0; i < arr.length; ++i)
        {
            arr[i] = !arr[i];
        }
    }
    return;
};

const getNeighborPads = (x,y,size) => {
    let neighborPads = [];
    if(x >= size ||  x < 0 || y >= size || y < 0 || size < 1)
    {
        return neighborPads;
    }
    neighborPads.push([x-1,y]); //L
    neighborPads.push([x+1,y]); //R
    neighborPads.push([x,y-1]); //T
    neighborPads.push([x,y+1]); //B
    return neighborPads.filter((neighbor) =>
    {
        return neighbor.every(val =>
        {
            return val >= 0 && val < size;
        });
    });
};

