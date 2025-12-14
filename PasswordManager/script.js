function AddData() {
  const site = document.getElementById("website").value.trim();
  const nameData = document.getElementById("username").value.trim();
  const ps = document.getElementById("password").value.trim();

  const DataPacket = {
    website: site,
    username: nameData,
    password: ps,
  };

  console.log(DataPacket);

  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];
  Data.push(DataPacket);

  localStorage.setItem("PasswordManager", JSON.stringify(Data));

  document.getElementById("website").value = "";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

function DownloadData() {
  const Data = JSON.parse(localStorage.getItem("PasswordManager")) || [];

  if (Data.length <= 0) {
    alert("No data to download");
    return;
  }

  const header = Object.keys(Data[0]).join(",") + "\n";

  const rows = Data.map((entry) => {
    return Object.values(entry).join(",");
  }).join("\n");

  const csvContent = header + rows;
  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "passwords.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  localStorage.removeItem("PasswordManager");
}
