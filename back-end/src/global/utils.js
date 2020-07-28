const handleError = async (outsideError, errorSource) => {
    try {
        if (typeof outsideError === 'string'){
            console.log(`Error: ${outsideError} ... from source: ${errorSource}`);
        }
        return null;

    } catch (error) {
        console.log('from HandleError in Utils.js:'+error);
    }
}

module.exports = {
    handleError
}