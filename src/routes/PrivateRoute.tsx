import React from 'react';

export default ({ children }: any ) => {
  return (
    <div>
      <div>在这里可以做路由鉴权和拦截</div>
      {children}
    </div>
  );
}
