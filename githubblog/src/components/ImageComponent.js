const ImageComponent = ({ node, ...props }) => {
    // props: {src: '', alt: ''}
    // node : props를 포함한 추가 정보들을 담은 객체, node 객체에서 props는 properties를 가리킴, 
    //        여기서는 사용 안함, 이런게 있다
     return (
       <div>
          <img {...props} alt={props.alt} />
       </div>
     )
   }
   
   export default  ImageComponent