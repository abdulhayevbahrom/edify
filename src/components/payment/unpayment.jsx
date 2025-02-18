import React from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import { PiInfoBold } from "react-icons/pi";
// antd tooltip
import { Button, Tooltip } from "antd";

function Payment() {
    return (
        <div className="payment">
            <div className="payment_title">
                <h1>To'lov qilmaganlar</h1>
            </div>
            <div className="payment_list">
                <table>
                    <thead>
                        <tr>
                            <th>O'quvchi ismi</th>
                            <th>To'lov summasi</th>
                            <th>To'lov sanasi</th>
                            <th>Qaysi oyligi</th>
                            <th>shartnoma sanasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Omadov Diyor</td>
                            <td>0 so'm</td>
                            <td>2025-01-10</td>
                            <td>Yanvar</td>
                            <td>2024-12-20
                                <Link>
                                    <Tooltip
                                        title="Batafsil"
                                        placement="bottom"
                                        color="#52555A"
                                        trigger="hover"
                                    >
                                        <Button>
                                            <PiInfoBold />
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>Karimov Nodir</td>
                            <td>0 so'm</td>
                            <td>2025-01-11</td>
                            <td>Yanvar</td>
                            <td>2024-12-20
                                <Link>
                                    <Tooltip
                                        title="Batafsil"
                                        placement="bottom"
                                        color="#52555A"
                                        trigger="hover"
                                    >
                                        <Button>
                                            <PiInfoBold />
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td>G'aniyev Mirshakar</td>
                            <td>0so'm</td>
                            <td>2025-01-12</td>
                            <td>Yanvar</td>
                            <td>2024-12-20
                                <Link>
                                    <Tooltip
                                        title="Batafsil"
                                        placement="bottom"
                                        color="#52555A"
                                        trigger="hover"
                                    >
                                        <Button>
                                            <PiInfoBold />
                                        </Button>
                                    </Tooltip>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Payment;
