import { ConnectWallet } from "@thirdweb-dev/react";

export default function Navbar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "10px",
            background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
        }}>
            <h1
            style={{
                color: "white",
                fontFamily: "Poppins, sans-serif",
                fontSize: "30px",
                fontWeight: "600",
            }
            }
            >QueenSwap</h1>
            <ConnectWallet/>
        </div>
    )
}