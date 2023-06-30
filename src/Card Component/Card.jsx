import React from 'react'
import './Card.css';

/**
 *  @argument data will be data that need to be displayed
 *  @argument keyTitleMap key:"title||options" dontShow - this will ignore the entry
 *  @argument keyTitleMap key:"title||options" dontShowEmpty - this will ignore if value is empty
 */
const Card = ({data, keyTitleMap} ) => {
  if(!data) data = {}
  if(!keyTitleMap) keyTitleMap = {}
  const itemList = Object.keys(data)
  console.log("asdfasd ",itemList);
  const keyTitleKeys = Object.keys(keyTitleMap);
  for(let key of keyTitleKeys){
    if(!data[key] && !itemList.includes(key)){
      console.log("asdf",keyTitleMap[key].split("||"));
      if(keyTitleMap[key] && !keyTitleMap[key].split("||").includes("dontShowEmpty"))
        itemList.push(key)
    }

    if(keyTitleMap[key] && keyTitleMap[key].split("||").includes("dontShowEmpty") && !data[key]){
      const index = itemList.indexOf(key);
      if (index > -1) {
        itemList.splice(index, 1);
      }
    }

  }
  return (
    <div>
      
      <section>
            <div className="container">
                {/* <h1>Responsive Card</h1> */}
                <div className="card">
                    <h3>Card</h3>
                    <div className="card-item">
                    {itemList.filter((item)=>keyTitleMap[item]!=="dontShow").map((item) => (
                      <div className='block'> 
                          <span><strong>{(keyTitleMap[item]?keyTitleMap[item].split("||")[0]:null) || item}</strong></span>
                          <span>{data[item]}</span>
                      </div>
                    ))}
                    </div>

                </div>
            </div>
        </section>
    </div>
  )
}

export default Card
