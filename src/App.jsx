import React, { memo } from 'react';
import styled from 'styled-components';

const FontContainer = styled.div`
font1{
  font: $font-XS;
}
font2{
  font:$font-S;
}
font3{
  font: $font-M;
}
font4{
  font: $font-XL;
}
`;

const App = memo(() => {
  return (
    <div>
      <FontContainer>
      <p className='font1'>안녕하세요</p>
      <p className='font2'>안녕하세요</p>
      <p className='font3'>안녕하세요</p>
      <p className='font4'>안녕하세요</p>
      <p className='font5'>안녕하세요</p>
      <p className='font6'>안녕하세요</p>
    </FontContainer>
    </div>
  );
});

export default App;