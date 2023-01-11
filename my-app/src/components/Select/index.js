import './style.css'
import React from 'react';
import { DatePicker, Space, TimePicker, } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
// const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
// const weekFormat = 'MM/DD';
// const monthFormat = 'YYYY/MM';
// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
// const customFormat = (value) => `custom format: ${value.format(dateFormat)}`;
// const customWeekStartEndFormat = (value) =>
//     `${dayjs(value).startOf('week').format(weekFormat)} ~ ${dayjs(value)
//         .endOf('week')
//         .format(weekFormat)}`;
const App5 = () => (
    <Space direction="vertical" size={12}>
        <DatePicker defaultValue={dayjs('2015/01/01', dateFormat)} format={dateFormat} />
    </Space>
);

const format = 'HH:mm';
const App1 = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;


const Srch = () => {
    return (
        <div className='main96'>
            <div className='main5'>
                <div>
                    <label htmlFor="">Where</label>
                    <input type="text" className='where1' placeholder='City, airport, address or hotel' />
                </div>
                <div className='main12 min'>
                    <label htmlFor="">From</label>
                    <App5 />
                </div><DownOutlined />
                <div className='main12 '>
                    <label htmlFor="" className='hide'>From</label>
                    <App1 />
                </div><DownOutlined />
                <div className='main12 min'>
                    <label htmlFor="">Until</label>
                    <App5 />
                </div><DownOutlined />
                <div className='main12 '>
                    <label htmlFor="" className='hide'>form</label>
                    <App1 />
                </div><DownOutlined />
                <div className='min-2'>
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="searchIconLabel" class="seo-pages-1iuz9hb" role="img" version="1.1"><path d="M20.75 21.52a.62.62 0 0 1-.44-.18l-6.11-6.11a.627.627 0 0 1-.18-.45c0-.17.07-.33.19-.45l.08-.07c2.51-2.51 2.51-6.61-.01-9.12-2.52-2.52-6.62-2.52-9.13 0-2.52 2.52-2.52 6.62 0 9.13a6.471 6.471 0 0 0 6.29 1.66c.34-.09.68.1.77.44.09.33-.1.68-.44.77-2.67.74-5.55-.02-7.51-1.98-3-3.01-3-7.9 0-10.9s7.9-3.01 10.9 0c2.88 2.88 3 7.5.35 10.52l5.68 5.68c.24.24.24.64 0 .88a.62.62 0 0 1-.44.18Z" fill="#121214"></path></svg>
                </div>
            </div>
        </div>
    )
}

const Btn = ({ title }) => {
    return (
        <button
            onClick={() => alert("Hello")
            }
            className='btn2'
        >{title}
        </button>
    )
}


export { Srch, Btn };