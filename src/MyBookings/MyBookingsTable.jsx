import React from 'react';

const MyBookingsTable = ({booking}) => {
    const {price,img,title,date} = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded-lg w-24 h-24">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
            </td>
            <td>{date}</td>
            <th>
                <button className="btn bg-[#FF3811] text-white">pending</button>
            </th>
        </tr>
    );
};

export default MyBookingsTable;