export const parseVideoDuration = (duration) => {
   


    const durationParts = duration
    .replace("PT","")
    .replace("H",":")
    .replace("M",":")
    .replace("S","")
    .split(":");

    

    if(durationParts.length === 3){
        return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}`:durationParts[1]
    }:${
        parseInt(durationParts[2])<10 ? `0${durationParts[2]}`:durationParts[2]
    }`;
    }

    if(durationParts.length === 2){
        return `${durationParts[0]}:${parseInt(durationParts[1])<10 ? `0${durationParts[1]}`:durationParts[1]
    }`;
    }

    if(durationParts.length === 1){
        return `0:${parseInt(durationParts[0])<10 ? `0${durationParts[0]}`:durationParts[0]
    }`;
    }

    return ""
}

// export const parseVideoDuration = (duration) => {
//     const durationParts = duration
//       .replace("PT", "")
//       .replace(/[HMS]/g, ":")
//       .split(":");
  
//     const paddedParts = durationParts.map((part) => (part.length === 1 ? `0${part}` : part));
  
//     switch (durationParts.length) {
//       case 3:
//         return `${paddedParts[0]}:${paddedParts[1]}:${paddedParts[2]}`;
//       case 2:
//         return `${paddedParts[0]}:${paddedParts[1]}`;
//       case 1:
//         return `0:${paddedParts[0]}`;
//       default:
//         return "";
//     }
//   };