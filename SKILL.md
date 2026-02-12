---
name: awscli
description: "Manage AWS Lightsail and EC2 instances using AWS CLI"
version: 1.0.0
author: RajithSanjaya
---

# AWS CLI Control Skill
This skill manages AWS Lightsail instances.

## Available Operations

### 1. List Instances

action: "list"

Example:
{
  "action": "list"
}

---

### 2. Reboot Instance

action: "reboot"  
instance: "<instance-name>"

Example:
{
  "action": "reboot",
  "instance": "Ubuntu-1"
}

---

### 3. Start Instance

action: "start"  
instance: "<instance-name>"

---

### 4. Stop Instance

action: "stop"  
instance: "<instance-name>"

---

## Notes

- Only use structured JSON input.
- Do NOT generate AWS CLI commands.
- Instance names must exactly match existing Lightsail instances.
