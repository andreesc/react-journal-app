export const fileUpdate = async(file) => {

    const CLOUD_URL = 'https://api.cloudinary.com/v1_1/andrescs/upload';
    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const resp = await fetch(CLOUD_URL, {
            method: 'POST',
            body: formData
        });
        if (resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }
    } catch (e) {
       throw e;
    }

}