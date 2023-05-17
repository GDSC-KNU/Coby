import './HelpModal.css';


function HelpModal(props){

    // const[height, setHeight] = useState(false);
    // const {width} = Dimension.get('window');
    // Image.getSize(imagePath, (w,h) => {
    //     setHeight(h*(width/w));

    // });
    
    return (
        <div className='modal'>
            <div className='modal-content'>
                <div className='name1'>
                    코드 리뷰
                </div>
                <div className='review'>
                    <p>코딩을 하다가 문제가 생겼을 때, 이곳에서 도움을 얻어요.</p>
                    <p>방을 만들고, 멘토님과의 소통을 통해 내 코드의 문제점을 알아봅시다!</p>
                </div>
                <div className='name2'>
                    페어 프로그래밍
                </div>
                <div className='pair'>
                    <p>여러명이 하나의 프로젝트를 작업할 때 사용해요.</p>
                    <p>즉각적으로 지식을 공유하고 함께 고민하며 코딩하는 공간입니다.</p>
                </div>
                <div className='name3'>
                    그룹
                </div>
                <div className='group'>
                    <p>나와 진로가 비슷한 사람들과 그룹을 통해 소통할 수 있어요.</p>
                    <p>이곳에서 그룹간 기여도도 쌓고, 정보도 나누며 함께 성장해봐요!</p>
                </div>
            </div>
        </div>
    );
}

export default HelpModal;