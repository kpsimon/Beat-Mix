// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, index, preset) =>
{
    let response = [];
    if(request === 'GET')
    {
        if(!(index < 0 || index >= presets.length))
        {
            response.push(200,presets[index]);
        }
        else
        {
            response.push(404);
        }
    }
    else if(request === 'PUT')
    {
        if(presets[index])
        {
            presets[index] = preset;
            response.push(200,preset);
        }
        else
        {
            response.push(404);
        }
    }
    else
    {
        response.push(400);
    }
    return response;
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
