"use client";

import { useState } from "react";

type ConfigResponse = {
  features: {
    enableLockSystem: boolean;
    enableObfuscation: boolean;
    enableHairPhysics: boolean;
  };
  buildSaltExists: boolean;
};

export function ConfigChecker() {
  const [data, setData] = useState<ConfigResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onLoad = async () => {
    setError(null);
    try {
      const response = await fetch("/api/build-config", { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`โหลด config ไม่สำเร็จ (${response.status})`);
      }
      const json = (await response.json()) as ConfigResponse;
      setData(json);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <section className="panel">
      <h2>ตรวจสอบการป้องกันฝั่งเซิร์ฟเวอร์</h2>
      <p>
        โค้ดหน้าเว็บยังมองเห็นได้เสมอ แต่ logic สำคัญควรถูกย้ายไป API/Server Action
        เท่านั้น
      </p>
      <div className="row" style={{ marginTop: 12 }}>
        <button type="button" className="btn" onClick={onLoad}>
          โหลดค่า Config จาก Server
        </button>
      </div>
      {error ? <p style={{ color: "#fca5a5" }}>{error}</p> : null}
      {data ? <pre className="code">{JSON.stringify(data, null, 2)}</pre> : null}
    </section>
  );
}
