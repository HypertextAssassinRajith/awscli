import { exec } from "child_process";

function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

export async function run(input) {

  if (input.action === "list") {
    const output = await runCommand("aws lightsail get-instances");
    return JSON.parse(output);
  }

  if (input.action === "reboot") {
    await runCommand(`aws lightsail reboot-instance --instance-name ${input.instance}`);
    return { success: true, message: `${input.instance} reboot initiated` };
  }

  if (input.action === "start") {
    await runCommand(`aws lightsail start-instance --instance-name ${input.instance}`);
    return { success: true, message: `${input.instance} starting` };
  }

  if (input.action === "stop") {
    await runCommand(`aws lightsail stop-instance --instance-name ${input.instance}`);
    return { success: true, message: `${input.instance} stopping` };
  }

  return { success: false, message: "Invalid action" };
}

