const key = 'dac087457f7e8d45343e1be4cf285df2';




check.onclick = function(){
    
if(cityField.value === ''){
    warning.style.marginTop = '200px';
    setTimeout(function(){
        warning.style.marginTop = '0';
    },2000)
    
}else{
        let city = cityField.value;
        fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+key)
        .then(response =>{
            return (response.json())
        })
        .then(data => {
            let t = (data.main.temp-273).toFixed(2) + ' °C';
            let ft = (data.main.feels_like-273).toFixed(2) + ' °C';
            console.log(data);

            setTimeout(function(){
                if(data.main.temp-273<=0){
                    wrap.style.background = 'linear-gradient(52deg, rgba(163,156,156,1) 8%, rgba(44,184,185,1) 61%, rgba(0,233,255,1) 100%)';
                    card.style.border = '1px solid #999';
                }else if(data.main.temp-273>0 && data.main.temp-273<=15){
                    wrap.style.background = 'linear-gradient(50deg, rgba(251,201,201,1) 0%, rgba(11,138,232,1) 100%);';
                    card.style.border = '1px solid #999';
                }else if(data.main.temp-273>15 && data.main.temp-273<=29){
                    wrap.style.background = 'linear-gradient(231deg, rgba(255,226,78,1) 9%, rgba(219,52,16,1) 79%)';
                    card.style.border = '1px solid #999';
                }else{
                    wrap.style.background = 'linear-gradient(231deg, rgba(255,0,0,1) 0%, rgba(255,149,0,1) 67%)';
                    card.style.border = '1px solid #999';
                }
                
                weather__data.style.display = 'flex';
                tem.innerText = t;
                feel__tem.innerText = ft;
                cit.innerText = data.name;
                weather__icon.style.backgroundImage = 'url(http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png)';
                weather__qual.innerText = data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1);
                
                if(data.wind.deg === 0 && data.wind.speed === 0 ){
                    wind__speed.innerText = 'Windless';
                     wind__dir.style.display = 'none';
                }else{
                    wind__dir.style.display = 'flex';
                    wind__dir.style.transform = 'rotate('+data.wind.deg+'deg)';
                    wind__speed.innerText = 'Wind speed: ' + data.wind.speed + ' m/s';
                }
            },700)

                function flagIco(){
                    console.log(data.sys.country);
                    country__name.innerText = data.sys.country;
                    flag.style.backgroundImage = 'url(https://countryflagsapi.com/png/'+data.sys.country+')';
                }
            flagIco();
        })

        crd__wrp.style.width = '50%';
    }   
}

cityField.onclick = function() {
    place.style.top = 0;
    place.style.fontSize = '10px';
}


























