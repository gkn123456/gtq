$(function(){
	$.ajax({
		url: 'https://www.toutiao.com/stream/widget/local_weather/data/?city=太原',
		dataType:'jsonp',
		success:function(obj){
        	console.log(obj.data.weather);
        	let st=obj.data.weather;
			$(".city").html(st.city_name);
			$(".zd1 span:first-of-type").html(st.aqi);
			$(".zd1 span:last-of-type").html(st.quality_level);
			$(".jd span").html(st.current_temperature);
			$(".jf span:first-of-type").html(st.wind_direction);
			$(".jf span:last-of-type").html(st.wind_level+"级");
			$(".jt span").html(st.day_condition);
			st.hourly_forecast.forEach(function(element,index){
				let str=`<li>
				<div>${element.hour}:00</div>
				<div>
					<img src="img/${element.weather_icon_id}.png" alt="">
				</div>
				<div>${element.temperature+"°"}</div>
			</li>`
			$(".jm ul").append(str);
			})
			st.forecast_list.forEach(function(element,index){
				let dates=element.date.slice(5);
				
				
				let str=`<div class="zjt1">
					<div>昨天</div>
					<div>${dates}</div>
					<div>${element.condition}</div>
					<div>
						<img src="img/${element.weather_icon_id}.png" alt="">
					</div>
				</div>`
			$(".zjt").append(str);
			})
			st.forecast_list.forEach(function(element,index){
				let dates=element.date.slice(5);
				let str=`<div class="tqt1">
					<div>
						<img src="img/${element.weather_icon_id}.png" alt="">
					</div>
					<div>${element.condition}</div>
					<div>${element.wind_direction}</div>
					<div>${element.wind_level+"级"}</div>
				</div>`
			$(".tqt").append(str);
			})
			// 最高温，最低温
			st.forecast_list.forEach(function(element,index){
				let str=`<div class="zst1">
					<div>${element.high_temperature+"°"}</div>
					<div>${element.low_temperature+"°"}</div>
				</div>`
			$(".zst").append(str);
			})
			$(".d1").html(st.dat_high_temperature+"/"+st.dat_low_temperature+"°");
			$(".d2").text(st.tomorrow_high_temperature+"/"+st.tomorrow_low_temperature+"°");
			$(".dt1").text(st.dat_condition);
			$(".dt2").text(st.tomorrow_condition);
			$(".dt3 img").attr('src', 'img/'+st.dat_weather_icon_id+'.png');
			$(".dt4 img").attr('src', 'img/'+st.tomorrow_weather_icon_id+'.png');

        }
	})
	
})