import type { INodeProperties } from 'n8n-workflow';

export const networkingDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					]
				}
			},
			"options": [
				{
					"name": "Get Firewalls",
					"value": "Get Firewalls",
					"action": "Firewalls List",
					"description": "Returns a paginated list of accessible Firewalls.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/firewalls"
						}
					}
				},
				{
					"name": "Create Firewalls",
					"value": "Create Firewalls",
					"action": "Firewall Create",
					"description": "Creates a Firewall to filter network traffic.\n\n* Use the `rules` property to create inbound and outbound access rules.\n\n* Use the `devices` property to assign the Firewall to a service and apply its Rules to the device. Requires `read_write` [User's Grants](/docs/api/account/#users-grants-view) to the device.\nCurrently, Firewalls can only be assigned to Linode instances.\n\n* A Firewall can be assigned to multiple Linode instances at a time.\n\n* A Linode instance can have one active, assigned Firewall at a time.\nAdditional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.\n\n* A `firewall_create` Event is generated when this endpoint returns successfully.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/firewalls"
						}
					}
				},
				{
					"name": "Delete Firewall",
					"value": "Delete Firewall",
					"action": "Firewall Delete",
					"description": "Delete a Firewall resource by its ID. This will remove all of the Firewall's Rules\nfrom any Linode services that the Firewall was assigned to.\n\nA `firewall_delete` Event is generated when this endpoint returns successfully.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}"
						}
					}
				},
				{
					"name": "Get Firewall",
					"value": "Get Firewall",
					"action": "Firewall View",
					"description": "Get a specific Firewall resource by its ID. The Firewall's Devices will not be\nreturned in the response. Instead, use the\n[List Firewall Devices](/docs/api/networking/#firewall-devices-list)\nendpoint to review them.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}"
						}
					}
				},
				{
					"name": "Update Firewall",
					"value": "Update Firewall",
					"action": "Firewall Update",
					"description": "Updates information for a Firewall. Some parts of a Firewall's configuration cannot\nbe manipulated by this endpoint:\n\n- A Firewall's Devices cannot be set with this endpoint. Instead, use the\n[Create Firewall Device](/docs/api/networking/#firewall-device-create)\nand [Delete Firewall Device](/docs/api/networking/#firewall-device-delete)\nendpoints to assign and remove this Firewall from Linode services.\n\n- A Firewall's Rules cannot be changed with this endpoint. Instead, use the\n[Update Firewall Rules](/docs/api/networking/#firewall-rules-update)\nendpoint to update your Rules.\n\n- A Firewall's status can be set to `enabled` or `disabled` by this endpoint, but it cannot be\nset to `deleted`. Instead, use the\n[Delete Firewall](/docs/api/networking/#firewall-delete)\nendpoint to delete a Firewall.\n\nIf a Firewall's status is changed with this endpoint, a corresponding `firewall_enable` or\n`firewall_disable` Event will be generated.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}"
						}
					}
				},
				{
					"name": "Get Firewall Devices",
					"value": "Get Firewall Devices",
					"action": "Firewall Devices List",
					"description": "Returns a paginated list of a Firewall's Devices. A Firewall Device assigns a\nFirewall to a Linode service (referred to as the Device's `entity`). Currently,\nonly Devices with an entity of type `linode` are accepted.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/devices"
						}
					}
				},
				{
					"name": "Create Firewall Device",
					"value": "Create Firewall Device",
					"action": "Firewall Device Create",
					"description": "Creates a Firewall Device, which assigns a Firewall to a service (referred to\nas the Device's `entity`) and applies the Firewall's Rules to the device.\n\n* Currently, only Devices with an entity of type `linode` are accepted.\n\n* A Firewall can be assigned to multiple Linode instances at a time.\n\n* A Linode instance can have one active, assigned Firewall at a time.\nAdditional disabled Firewalls can be assigned to a service, but they cannot be enabled if another active Firewall is already assigned to the same service.\n\n* A `firewall_device_add` Event is generated when the Firewall Device is added successfully.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/devices"
						}
					}
				},
				{
					"name": "Delete Firewall Device",
					"value": "Delete Firewall Device",
					"action": "Firewall Device Delete",
					"description": "Removes a Firewall Device, which removes a Firewall from the Linode service it was\nassigned to by the Device. This will remove all of the Firewall's Rules from the Linode\nservice. If any other Firewalls have been assigned to the Linode service, then those Rules\nwill remain in effect.\n\nA `firewall_device_remove` Event is generated when the Firewall Device is removed successfully.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/devices/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Firewall Device",
					"value": "Get Firewall Device",
					"action": "Firewall Device View",
					"description": "Returns information for a Firewall Device, which assigns a Firewall\nto a Linode service (referred to as the Device's `entity`). Currently,\nonly Devices with an entity of type `linode` are accepted.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/devices/{{$parameter[\"deviceId\"]}}"
						}
					}
				},
				{
					"name": "Get Firewall Rules",
					"value": "Get Firewall Rules",
					"action": "Firewall Rules List",
					"description": "Returns the inbound and outbound Rules for a Firewall.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/rules"
						}
					}
				},
				{
					"name": "Update Firewall Rules",
					"value": "Update Firewall Rules",
					"action": "Firewall Rules Update",
					"description": "Updates the inbound and outbound Rules for a Firewall.\n\n**Note:** This command replaces all of a Firewall's `inbound` and/or `outbound` rulesets with the values specified in your request.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networking/firewalls/{{$parameter[\"firewallId\"]}}/rules"
						}
					}
				},
				{
					"name": "Get I Ps",
					"value": "Get I Ps",
					"action": "IP Addresses List",
					"description": "Returns a paginated list of IP Addresses on your Account, excluding private addresses.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/ips"
						}
					}
				},
				{
					"name": "Allocate IP",
					"value": "Allocate IP",
					"action": "IP Address Allocate",
					"description": "Allocates a new IPv4 Address on your Account. The Linode must be configured to support additional addresses - please [open a support ticket](/docs/api/support/#support-ticket-open) requesting additional addresses before attempting allocation.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ips"
						}
					}
				},
				{
					"name": "Assign I Ps",
					"value": "Assign I Ps",
					"action": "IP Addresses Assign",
					"description": "Assign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.\n\nThe following restrictions apply:\n* All Linodes involved must have at least one public IPv4 address after assignment.\n* Linodes may have no more than one assigned private IPv4 address.\n* Linodes may have no more than one assigned IPv6 range.\n\n[Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.\n\n**Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:\n* **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))\n* **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ips/assign"
						}
					}
				},
				{
					"name": "Share I Ps",
					"value": "Share I Ps",
					"action": "IP Addresses Share",
					"description": "Configure shared IPs.\n\nIP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.\n\nIP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ips/share"
						}
					}
				},
				{
					"name": "Get IP",
					"value": "Get IP",
					"action": "IP Address View",
					"description": "Returns information about a single IP Address on your Account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/ips/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Update IP",
					"value": "Update IP",
					"action": "IP Address RDNS Update",
					"description": "Sets RDNS on an IP Address. Forward DNS must already be set up for reverse DNS to be applied. If you set the RDNS to `null` for public IPv4 addresses, it will be reset to the default _ip.linodeusercontent.com_ RDNS value.\n",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/networking/ips/{{$parameter[\"address\"]}}"
						}
					}
				},
				{
					"name": "Assign I Pv 4 S",
					"value": "Assign I Pv 4 S",
					"action": "Linodes Assign IPv4s",
					"description": "This command is equivalent to **IP Addresses Assign** ([POST /networking/ips/assign](#ip-addresses-assign)).\n\nAssign multiple IPv4 addresses and/or IPv6 ranges to multiple Linodes in one Region. This allows swapping, shuffling, or otherwise reorganizing IPs to your Linodes.\n\nThe following restrictions apply:\n* All Linodes involved must have at least one public IPv4 address after assignment.\n* Linodes may have no more than one assigned private IPv4 address.\n* Linodes may have no more than one assigned IPv6 range.\n\n[Open a Support Ticket](/docs/api/support/#support-ticket-open) to request additional IPv4 addresses or IPv6 ranges beyond standard account limits.\n\n**Note**: Removing an IP address that has been set as a Managed Linode's `ssh.ip` causes the Managed Linode's SSH access settings to reset to their default values. To view and configure Managed Linode SSH settings, use the following commands:\n* **Linode's Managed Settings View** ([GET /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-view))\n* **Linode's Managed Settings Update** ([PUT /managed/linode-settings/{linodeId}](/docs/api/managed/#linodes-managed-settings-update))\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ipv4/assign"
						}
					}
				},
				{
					"name": "Share I Pv 4 S",
					"value": "Share I Pv 4 S",
					"action": "IPv4 Sharing Configure",
					"description": "This command is equivalent to **IP Addresses Share** ([POST /networking/ips/share](#ip-addresses-share)).\n\nConfigure shared IPs.\n\nIP sharing allows IP address reassignment (also referred to as IP failover) from one Linode to another if the primary Linode becomes unresponsive. This means that requests to the primary Linode's IP address can be automatically rerouted to secondary Linodes at the configured shared IP addresses.\n\nIP failover requires configuration of a failover service (such as [Keepalived](/docs/guides/ip-failover-keepalived)) within the internal system of the primary Linode.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ipv4/share"
						}
					}
				},
				{
					"name": "Get I Pv 6 Pools",
					"value": "Get I Pv 6 Pools",
					"action": "IPv6 Pools List",
					"description": "Displays the IPv6 pools on your Account. A pool of IPv6 addresses are routed to all of your Linodes in a single [Region](/docs/api/regions/#regions-list). Any Linode on your Account may bring up any address in this pool at any time, with no external configuration required.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/ipv6/pools"
						}
					}
				},
				{
					"name": "Get I Pv 6 Ranges",
					"value": "Get I Pv 6 Ranges",
					"action": "IPv6 Ranges List",
					"description": "Displays the IPv6 ranges on your Account.\n\n\n  * An IPv6 range is a `/64` or `/54` block of IPv6 addresses routed to a single Linode in a given [Region](/docs/api/regions/#regions-list).\n\n  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.\n\n  * Access the IPv6 Range Create ([POST /networking/ipv6/ranges](/docs/api/networking/#ipv6-range-create)) endpoint to add a `/64` or `/56` block of IPv6 addresses to your account.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/ipv6/ranges"
						}
					}
				},
				{
					"name": "Post I Pv 6 Range",
					"value": "Post I Pv 6 Range",
					"action": "IPv6 Range Create",
					"description": "Creates an IPv6 Range and assigns it based on the provided Linode or route target IPv6 SLAAC address. See the `ipv6` property when accessing the Linode View ([GET /linode/instances/{linodeId}](/docs/api/linode-instances/#linode-view)) endpoint to view a Linode's IPv6 SLAAC address.\n  * Either `linode_id` or `route_target` is required in a request.\n  * `linode_id` and `route_target` are mutually exclusive. Submitting values for both properties in a request results in an error.\n  * Upon a successful request, an IPv6 range is created in the [Region](/docs/api/regions/#regions-list) that corresponds to the provided `linode_id` or `route_target`.\n  * Your Linode is responsible for routing individual addresses in the range, or handling traffic for all the addresses in the range.\n  * Access the IP Addresses Assign ([POST /networking/ips/assign](/docs/api/networking/#ip-addresses-assign)) endpoint to re-assign IPv6 Ranges to your Linodes.\n\n**Note**: The following restrictions apply:\n  * A Linode can only have one IPv6 range targeting its SLAAC address.\n  * An account can only have one IPv6 range in each [Region](/docs/api/regions/#regions-list).\n  * [Open a Support Ticket](/docs/api/support/#support-ticket-open) to request expansion of these restrictions.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/networking/ipv6/ranges"
						}
					}
				},
				{
					"name": "Delete I Pv 6 Range",
					"value": "Delete I Pv 6 Range",
					"action": "IPv6 Range Delete",
					"description": "Removes this IPv6 range from your account and disconnects the range from any assigned Linodes.\n\n**Note:** Shared IPv6 ranges cannot be deleted at this time. Please contact Customer Support for assistance.\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/networking/ipv6/ranges/{{$parameter[\"range\"]}}"
						}
					}
				},
				{
					"name": "Get I Pv 6 Range",
					"value": "Get I Pv 6 Range",
					"action": "IPv6 Range View",
					"description": "View IPv6 range information.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/ipv6/ranges/{{$parameter[\"range\"]}}"
						}
					}
				},
				{
					"name": "Get VLA Ns",
					"value": "Get VLA Ns",
					"action": "VLANs List",
					"description": "Returns a list of all Virtual Local Area Networks (VLANs) on your Account. VLANs provide\na mechanism for secure communication between two or more Linodes that are assigned to the\nsame VLAN and are both within the same Layer 2 broadcast domain.\n\nVLANs are created and attached to Linodes by using the `interfaces` property for the following endpoints:\n\n- Linode Create ([POST /linode/instances](/docs/api/linode-instances/#linode-create))\n- Configuration Profile Create ([POST /linode/instances/{linodeId}/configs](/docs/api/linode-instances/#configuration-profile-create))\n- Configuration Profile Update ([PUT /linode/instances/{linodeId}/configs/{configId}](/docs/api/linode-instances/#configuration-profile-update))\n\nThere are several ways to detach a VLAN from a Linode:\n\n- [Update](/docs/api/linode-instances/#configuration-profile-update) the active Configuration Profile to remove the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode.\n- [Create](/docs/api/linode-instances/#configuration-profile-create) a new Configuration Profile without the VLAN interface, then [reboot](/docs/api/linode-instances/#linode-reboot) the Linode into the new Configuration Profile.\n- [Delete](/docs/api/linode-instances/#linode-delete) the Linode.\n\n**Note:** Only Next Generation Network (NGN) data centers support VLANs. Use the Regions ([/regions](/docs/api/regions/)) endpoint to view the capabilities of data center regions.\nIf a VLAN is attached to your Linode and you attempt to migrate or clone it to a non-NGN data center,\nthe migration or cloning will not initiate. If a Linode cannot be migrated because of an incompatibility,\nyou will be prompted to select a different data center or contact support.\n\n**Note:** See the [VLANs Overview](/docs/products/networking/vlans/#technical-specifications) to view additional specifications and limitations.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/networking/vlans"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /networking/firewalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewalls"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewalls"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewalls"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewalls"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/firewalls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewalls"
					]
				}
			}
		},
		{
			"displayName": "Devices",
			"name": "devices",
			"type": "json",
			"default": "{\n  \"linodes\": [\n    123,\n    456\n  ]\n}",
			"description": "Devices to create for this Firewall.\nWhen a Device is created, the Firewall is assigned to its associated service.\nCurrently, Devices can only be created for Linode instances.\n",
			"routing": {
				"send": {
					"property": "devices",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewalls"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "rules",
			"type": "string",
			"default": {},
			"routing": {
				"send": {
					"property": "rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewalls"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewalls"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networking/firewalls/{firewallId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete Firewall"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete Firewall"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/firewalls/{firewallId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall"
					]
				}
			}
		},
		{
			"displayName": "PUT /networking/firewalls/{firewallId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "firewall123",
			"description": "The Firewall's label, for display purposes only.\n\nFirewall labels have the following constraints:\n\n  * Must begin and end with an alphanumeric character.\n  * May only consist of alphanumeric characters, dashes (`-`), underscores (`_`) or periods (`.`).\n  * Cannot have two dashes (`--`), underscores (`__`) or periods (`..`) in a row.\n  * Must be between 3 and 32 characters.\n  * Must be unique.\n",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "enabled",
			"description": "The status to be applied to this Firewall.\n \n * When a Firewall is first created its status is `enabled`.\n * Use the [Delete Firewall](/docs/api/networking/#firewall-delete) endpoint to delete a Firewall.\n",
			"options": [
				{
					"name": "Enabled",
					"value": "enabled"
				},
				{
					"name": "Disabled",
					"value": "disabled"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  \"example tag\",\n  \"another example\"\n]",
			"description": "An array of tags applied to this object. Tags are for organizational purposes only.\n",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/firewalls/{firewallId}/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Devices"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Devices"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Devices"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Devices"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/firewalls/{firewallId}/devices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"type": "number",
			"default": 123,
			"description": "The entity's ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "label",
			"type": "string",
			"default": "my-linode",
			"description": "The entity's label.",
			"routing": {
				"send": {
					"property": "label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "linode",
			"description": "The entity's type.",
			"options": [
				{
					"name": "Linode",
					"value": "linode"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "/v4/linode/instances/123",
			"description": "The URL you can use to access this entity.\n",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Create Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networking/firewalls/{firewallId}/devices/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/firewalls/{firewallId}/devices/{deviceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Device"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/firewalls/{firewallId}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "PUT /networking/firewalls/{firewallId}/rules",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Inbound",
			"name": "inbound",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "inbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Outbound",
			"name": "outbound",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "outbound",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update Firewall Rules"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Ps"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Ps"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Allocate IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 123,
			"description": "The ID of a Linode you you have access to that this address will be allocated to.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Allocate IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Public",
			"name": "public",
			"type": "boolean",
			"default": true,
			"description": "Whether to create a public or private IPv4 address.\n",
			"routing": {
				"send": {
					"property": "public",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Allocate IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "ipv4",
			"description": "The type of address you are requesting. Only IPv4 addresses may be allocated through this endpoint.\n",
			"options": [
				{
					"name": "Ipv 4",
					"value": "ipv4"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Allocate IP"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Allocate IP"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ips/assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Ps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"address\": \"192.0.2.1\",\n    \"linode_id\": 123\n  }\n]",
			"description": "The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.\n",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Ps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Ps"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Ps"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ips/share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Ps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ips",
			"name": "ips",
			"type": "json",
			"default": "[\n  \"192.0.2.1\",\n  \"2001:db8:3c4d:15::\"\n]",
			"description": "A list of secondary Linode IPs to share with the primary Linode.\n* Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n* Can include both private and public IPv4 addresses.\n* You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n* Enter an empty array to remove all shared IP addresses.\n",
			"routing": {
				"send": {
					"property": "ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Ps"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 123,
			"description": "The ID of the primary Linode that the addresses will be shared with.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Ps"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Ps"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/ips/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get IP"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get IP"
					]
				}
			}
		},
		{
			"displayName": "PUT /networking/ips/{address}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update IP"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rdns",
			"name": "rdns",
			"type": "string",
			"default": "test.example.org",
			"description": "The reverse DNS assigned to this address. For public IPv4 addresses, this will be set to a default value provided by Linode if not explicitly set.\n",
			"routing": {
				"send": {
					"property": "rdns",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update IP"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Update IP"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ipv4/assign",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Pv 4 S"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Assignments",
			"name": "assignments",
			"type": "json",
			"default": "[\n  {\n    \"address\": \"192.0.2.1\",\n    \"linode_id\": 123\n  }\n]",
			"description": "The list of assignments to make. You must have read_write access to all IPs being assigned and all Linodes being assigned to in order for the assignments to succeed.\n",
			"routing": {
				"send": {
					"property": "assignments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Pv 4 S"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Region",
			"name": "region",
			"type": "string",
			"default": "us-east",
			"description": "The ID of the Region in which these assignments are to take place. All IPs and Linodes must exist in this Region.\n",
			"routing": {
				"send": {
					"property": "region",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Pv 4 S"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Assign I Pv 4 S"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ipv4/share",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Pv 4 S"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Ips",
			"name": "ips",
			"type": "json",
			"default": "[\n  \"192.0.2.1\",\n  \"2001:db8:3c4d:15::\"\n]",
			"description": "A list of secondary Linode IPs to share with the primary Linode.\n* Can include both IPv4 addresses and IPv6 ranges (omit /56 and /64 prefix lengths)\n* Can include both private and public IPv4 addresses.\n* You must have access to all of these addresses and they must be in the same Region as the primary Linode.\n* Enter an empty array to remove all shared IP addresses.\n",
			"routing": {
				"send": {
					"property": "ips",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Pv 4 S"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 123,
			"description": "The ID of the primary Linode that the addresses will be shared with.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Pv 4 S"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Share I Pv 4 S"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/ipv6/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Pools"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Pools"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Pools"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Pools"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/ipv6/ranges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Ranges"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Ranges"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Ranges"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Ranges"
					]
				}
			}
		},
		{
			"displayName": "POST /networking/ipv6/ranges",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Post I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "Linode ID",
			"name": "linode_id",
			"type": "number",
			"default": 123,
			"description": "The ID of the Linode to assign this range to. The SLAAC address for the provided Linode is used as the range's `route_target`.\n\n* **Required** if `route_target` is omitted from the request.\n\n* Mutually exclusive with `route_target`. Submitting values for both properties in a request results in an error.\n",
			"routing": {
				"send": {
					"property": "linode_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Post I Pv 6 Range"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Prefix Length",
			"name": "prefix_length",
			"type": "options",
			"default": 56,
			"description": "The prefix length of the IPv6 range.\n",
			"options": [
				{
					"name": "56",
					"value": 56
				},
				{
					"name": "64",
					"value": 64
				}
			],
			"routing": {
				"send": {
					"property": "prefix_length",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Post I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "Route Target",
			"name": "route_target",
			"type": "string",
			"default": "2001:0db8::1",
			"description": "The IPv6 SLAAC address to assign this range to.\n\n* **Required** if `linode_id` is omitted from the request.\n\n* Mutually exclusive with `linode_id`. Submitting values for both properties in a request results in an error.\n\n* **Note**: Omit the `/128` prefix length of the SLAAC address when using this property.\n",
			"routing": {
				"send": {
					"property": "route_target",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Post I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Post I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "DELETE /networking/ipv6/ranges/{range}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Delete I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/ipv6/ranges/{range}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get I Pv 6 Range"
					]
				}
			}
		},
		{
			"displayName": "GET /networking/vlans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get VLA Ns"
					]
				}
			}
		},
		{
			"displayName": "Page",
			"name": "page",
			"description": "The page of a collection to return.",
			"default": 1,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get VLA Ns"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "page_size",
			"description": "The number of items to return per page.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "page_size",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get VLA Ns"
					]
				}
			}
		},
		{
			"displayName": "Bearer Token",
			"name": "security_personalaccesstoken",
			"type": "string",
			"default": "",
			"description": "HTTP bearer authentication for personalAccessToken",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ 'Bearer ' + $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Networking"
					],
					"operation": [
						"Get VLA Ns"
					]
				}
			}
		},
];
