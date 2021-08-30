import React, {useEffect} from 'react';
import useStorage from 'hooks/useStorage';


const ProgressBar = ({file, setImgurl, setFile}) => {

    const period = file.name.lastIndexOf('.')
    const initial = file.name.substring(0, period);
    const ext = file.name.substring(period + 1);
    const newName = initial+Date.now()+"."+ext; 
    const { progress, url, error } = useStorage(file, newName);
 
    if(error){
        console.log(error);
    }
    useEffect(() => {
        if(url){
            setImgurl(url);
            setFile(null);
        }
    }, [url, setImgurl, setFile])

    return (
        <>
        <div className="h-3 relative max-w-xl rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-200 absolute"></div>
            <div className="h-full bg-green-500 absolute" style={{ width: progress + '%' }}></div>
        </div>
        <div className="">{progress}%</div>
        </>
    );
}

export default ProgressBar;
