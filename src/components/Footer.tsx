export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-row bg-dark text-light p-3 gap-3 align-items-start user-select-none justify-content-evenly">
                <div>
                    <h3 className="text- center">Номера телефоно для связи</h3>
                    <ul>
                        <li><i className="bi bi-phone"></i> 8(999)999-99-99</li>
                        <li><i className="bi bi-phone"></i> 8(999)999-99-98</li>
                        <li><i className="bi bi-phone"></i> 8(999)999-99-97</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text- center">Электроные почты</h3>
                    <ul>
                        <li><i className="bi bi-mailbox"> mail@mail.ru</i></li>
                    </ul>
                </div>
            </footer>
        </>
    )
}
